import {Component, OnInit} from '@angular/core';
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faCopy, faEnvelope, faGraduationCap, faMapMarker, faMobile, faUser} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reading-group',
  templateUrl: './reading-group.component.html',
  styleUrls: ['./reading-group.component.scss']
})
export class ReadingGroupComponent implements OnInit {
  value = 'example.mail@gmail.com';
  github = faGithub;
  linkedin = faLinkedin;
  twitter = faTwitter;
  mail = faEnvelope;
  calendar = faCalendar;
  authors = faUser;
  Gscholar = faGraduationCap;
  location = faMapMarker;
  paper = faCopy;
  mobile = faMobile;
  form: FormGroup;
  name: FormControl = new FormControl('', []);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('', []);
  honeypot: FormControl = new FormControl(''); // we will use this to prevent spam
  success: boolean = false; // show and hide the success message
  submit: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.status == 'VALID' && this.honeypot.value == '') {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append('name', this.form.get('name').value);
      formData.append('email', this.form.get('email').value);
      //formData.append('message', this.form.get('message').value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submit = false;
      this.http.post('https://script.google.com/macros/s/AKfycbwL1PlWxp1Pd-l2HTPUJKZVsfNni5QkcH0QEDOb6hAHgsw59AdKmlLb9ZAONp8wmEaDig/exec', formData).subscribe(
        (response) => {
          // choose the response message
          if (response['result'] == 'success') {
            this.responseMessage = 'Success! I\'ll send you all updates!';
            this.success = true; // show the response message
          } else {
            this.responseMessage = 'Sorry, something went wrong. Please reload and try again or directly send me your information to hannes.staerk@gmail.com.';
            this.success = false;
          }
          this.form.enable(); // re enable the form after a success
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = 'Sorry, an error occurred. Please reload and try again or directly send me your information to hannes.staerk@gmail.com.';
          this.form.enable(); // re enable the form after a success
          this.success = false; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    } else {
      this.success = false;
      this.responseMessage = 'It appears that your email is not valid. Please check it.';
    }
    this.submit = true;
  }
}
