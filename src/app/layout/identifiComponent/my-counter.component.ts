import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
import {HttpClient} from "@angular/common/http";
import {Data} from "@angular/router";

interface ItemData {
  id: string;
  sid: string;
  msg: string;
  create_by: string;
  category: any;
  status: any;
  tags: any;
}
@Component({
  selector: 'app-identifiComponent',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent implements OnInit{
  visible: boolean = false;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Data[] = [];
  listOfData: { msg: string; id: string; sid: string; create_by: string, category: any, status: any, tags: any}[] = [];
  setOfCheckedId = new Set<string>();
  total: number = 20;
  isCollapsed = false;
  listItem  : any = [{type: 1, text: 'Chuyển Hoạt động DHND đã chọn'},{type: 2, text:'Chuyển Không hoạt động DHND đã chọn'},{type: 3, text:'Xóa các DHND đã chọn'},{type: 4, text:'Sửa phân loại'}]

  clickMe(data: string): void {
    this.visible = false;
    console.log(data)
  }

  change(value: boolean): void {
    console.log(value);
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item: any) => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    // this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    // this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>, private readonly httpClient: HttpClient) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  onSidebarItemClick(key: string) {

  }

  reset() {
    this.store.dispatch(reset());
  }

  svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2H17.5C19.99 2 22 4.01 22 6.5V9M22 16V17.5C22 19.99 19.99 22 17.5 22H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M7 12H17M12 17V7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

  ngOnInit(): void {
    this.httpClient.post('http://192.168.14.217:8991/rule/v2/filter', {
      "category_ids": [],
      "tag_ids": [],
      "rule_status": [],
      "usernames": [],
      "keyword": "",
      "page": 0,
      "size": "10",
      "all": false,
      "order_by": 0
    }).subscribe((response: any) => {
      // Xử lý response
      this.listOfData = response.data.rules.map((value: any, index: number) => ({
        id: value.id,
        sid: value.sid,
        msg: value.msg,
        create_by: value.create_by,
        category: value.category,
      }));

      this.total = response.data.number_of_rules;

      console.log(response.data.number_of_rules)
    });
  }
}
