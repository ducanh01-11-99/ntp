import {Component, OnInit} from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../services/authServices/auth.service";
@Component({
  selector: 'nz-demo-form-normal-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginPage implements OnInit{
  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const username = this.validateForm.value.email;
      const password = this.validateForm.value.password;
      if(typeof username === "string" && typeof password === "string")
      this.authService.signin(username, password, true)
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  validateUsername: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value.length < 3) {
      return { userNameTooShort: true, error: true };
    }
    return {};
  };

  dynamicPath = "avatar.png";

  confirmationValidator: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value.length < 8) {
      return { passTooShort: true, error: true };
    }
    return {};
  };
  constructor(private fb: NonNullableFormBuilder, public translateService: TranslateService, private authService: AuthService) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, this.validateUsername]],
      password: ['', [Validators.required, this.confirmationValidator]],
    });
  }

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }

  optionList = [
    { label: 'Tiếng việt', value: 'vi-Vi' },
    { label: 'English', value: 'en-US' }
  ];
  selectedValue = ''


  ngOnInit(): void {
    this.selectedValue = 'en-US'
  }

  // validate thêm vào nhé
  // Check lại chỗ đặt giá trị mặc định cho select
}
