## Sign In
![image](https://github.com/Gitart/HTML/assets/3950155/a00d96f9-04f4-4dbe-a38e-62a1ac95575b)

```html
<div class="container-fluid">
<div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
<div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
<div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
<div class="d-flex align-items-center justify-content-between mb-3">
<a href="index.html" class="">
<h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
</a>
<h3>Sign Up</h3>
</div>
<div class="form-floating mb-3">
<input type="text" class="form-control" id="floatingText" placeholder="jhondoe">
<label for="floatingText">Username</label>
</div>
<div class="form-floating mb-3">
<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
<label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-4">
<input type="password" class="form-control" id="floatingPassword" placeholder="Password">
<label for="floatingPassword">Password</label>
</div>
<div class="d-flex align-items-center justify-content-between mb-4">
<div class="form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1">
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<a href="">Forgot Password</a>
</div>
<button type="submit" class="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
<p class="text-center mb-0">Already have an Account? <a href="">Sign In</a></p>
</div>
</div>
</div>
</div>
```


## Login

![image](https://github.com/Gitart/HTML/assets/3950155/0830c333-9a59-4ba7-a973-07a4cb772b57)

```html
<div class="container-fluid">
<div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
<div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
<div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
<div class="d-flex align-items-center justify-content-between mb-3">
<a href="index.html" class="">
<h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
</a>
<h3>Sign In</h3>
</div>
<div class="form-floating mb-3">
<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
<label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-4">
<input type="password" class="form-control" id="floatingPassword" placeholder="Password">
<label for="floatingPassword">Password</label>
</div>
<div class="d-flex align-items-center justify-content-between mb-4">
<div class="form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1">
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<a href="">Forgot Password</a>
</div>
<button type="submit" class="btn btn-primary py-3 w-100 mb-4">Sign In</button>
<p class="text-center mb-0">Don't have an Account? <a href="">Sign Up</a></p>
</div>
</div>
</div>
</div>
```



## Head

![image](https://github.com/Gitart/HTML/assets/3950155/3028ff09-dace-4fad-9f0d-720c74adff67)

```html
<nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
<a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
<h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
</a>
<a href="#" class="sidebar-toggler flex-shrink-0">
<i class="fa fa-bars"></i>
</a>
<form class="d-none d-md-flex ms-4">
<input class="form-control border-0" type="search" placeholder="Search">
</form>
<div class="navbar-nav align-items-center ms-auto">
<div class="nav-item dropdown">
<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
<i class="fa fa-envelope me-lg-2"></i>
<span class="d-none d-lg-inline-flex">Message</span>
</a>
<div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
<a href="#" class="dropdown-item">
<div class="d-flex align-items-center">
<img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
<div class="ms-2">
<h6 class="fw-normal mb-0">Jhon send you a message</h6>
<small>15 minutes ago</small>
</div>
</div>
</a>
<hr class="dropdown-divider">
<a href="#" class="dropdown-item">
<div class="d-flex align-items-center">
<img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
<div class="ms-2">
<h6 class="fw-normal mb-0">Jhon send you a message</h6>
<small>15 minutes ago</small>
</div>
</div>
</a>
<hr class="dropdown-divider">
<a href="#" class="dropdown-item">
<div class="d-flex align-items-center">
<img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
<div class="ms-2">
<h6 class="fw-normal mb-0">Jhon send you a message</h6>
<small>15 minutes ago</small>
</div>
</div>
</a>
<hr class="dropdown-divider">
<a href="#" class="dropdown-item text-center">See all message</a>
</div>
</div>
<div class="nav-item dropdown">
<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
<i class="fa fa-bell me-lg-2"></i>
<span class="d-none d-lg-inline-flex">Notificatin</span>
</a>
<div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
<a href="#" class="dropdown-item">
<h6 class="fw-normal mb-0">Profile updated</h6>
<small>15 minutes ago</small>
</a>
<hr class="dropdown-divider">
<a href="#" class="dropdown-item">
<h6 class="fw-normal mb-0">New user added</h6>
<small>15 minutes ago</small>
</a>
<hr class="dropdown-divider">
<a href="#" class="dropdown-item">
<h6 class="fw-normal mb-0">Password changed</h6>
<small>15 minutes ago</small>
</a>
<hr class="dropdown-divider">
<a href="#" class="dropdown-item text-center">See all notifications</a>
</div>
</div>
<div class="nav-item dropdown">
<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
<img class="rounded-circle me-lg-2" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
<span class="d-none d-lg-inline-flex">John Doe</span>
</a>
<div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
<a href="#" class="dropdown-item">My Profile</a>
<a href="#" class="dropdown-item">Settings</a>
<a href="#" class="dropdown-item">Log Out</a>
</div>
</div>
</div>
</nav>
```


## ELEMENTS
![image](https://github.com/Gitart/HTML/assets/3950155/8b81b24b-9398-40d3-8767-9e20fd47c5ac)
```
<div class="col-sm-12 col-xl-6">
<div class="bg-light rounded h-100 p-4">
<h6 class="mb-4">Basic Form</h6>
<form>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.
</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1">
</div>
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1">
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>
</div>
```

![image](https://github.com/Gitart/HTML/assets/3950155/2b84a4ea-19fd-47e6-9974-a0eed851fd09)

```html
<div class="col-sm-12 col-xl-6">
<div class="bg-light rounded h-100 p-4">
<h6 class="mb-4">Horizontal Form</h6>
<form>
<div class="row mb-3">
<label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
<div class="col-sm-10">
<input type="email" class="form-control" id="inputEmail3">
</div>
</div>
<div class="row mb-3">
<label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
<div class="col-sm-10">
<input type="password" class="form-control" id="inputPassword3">
</div>
</div>
<fieldset class="row mb-3">
<legend class="col-form-label col-sm-2 pt-0">Radios</legend>
<div class="col-sm-10">
<div class="form-check">
<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked="">
<label class="form-check-label" for="gridRadios1">
First radio
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
<label class="form-check-label" for="gridRadios2">
Second radio
</label>
</div>
</div>
</fieldset>
<div class="row mb-3">
<legend class="col-form-label col-sm-2 pt-0">Checkbox</legend>
<div class="col-sm-10">
<div class="form-check">
<input class="form-check-input" type="checkbox" id="gridCheck1">
<label class="form-check-label" for="gridCheck1">
Check me out
</label>
</div>
</div>
</div>
<button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>
</div>
```

## Floating label
![image](https://github.com/Gitart/HTML/assets/3950155/d609796c-59da-4c88-bf03-03294b1212c5)

```html
<div class="col-sm-12 col-xl-6">
<div class="bg-light rounded h-100 p-4">
<h6 class="mb-4">Floating Label</h6>
<div class="form-floating mb-3">
<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
<label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
<input type="password" class="form-control" id="floatingPassword" placeholder="Password">
<label for="floatingPassword">Password</label>
</div>
<div class="form-floating mb-3">
<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
<option selected="">Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
<label for="floatingSelect">Works with selects</label>
</div>
<div class="form-floating">
<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 150px;"></textarea>
<label for="floatingTextarea">Comments</label>
</div>
</div>
</div>
```

## Input group

![image](https://github.com/Gitart/HTML/assets/3950155/5dd663d2-7f2b-4d74-87b1-e6179925315d)

```html
<div class="col-sm-12 col-xl-6">
<div class="bg-light rounded h-100 p-4">
<h6 class="mb-4">Input Group</h6>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">@</span>
<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
<span class="input-group-text" id="basic-addon2">@example.com</span>
</div>
<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>
<div class="input-group mb-3">
<span class="input-group-text">$</span>
<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
<span class="input-group-text">.00</span>
</div>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Username" aria-label="Username">
<span class="input-group-text">@</span>
<input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>
<div class="input-group">
<span class="input-group-text">With textarea</span>
<textarea class="form-control" aria-label="With textarea" style="height: 18px;"></textarea>
</div>
</div>
</div>
```

## Fotter title

![image](https://github.com/Gitart/HTML/assets/3950155/fbccad0b-fafb-4b62-bdc8-00abf37de3c0)

```html
<div class="container-fluid pt-4 px-4">
<div class="bg-light rounded-top p-4">
<div class="row">
<div class="col-12 col-sm-6 text-center text-sm-start">
© <a href="#">Your Site Name</a>, All Right Reserved.
</div>
<div class="col-12 col-sm-6 text-center text-sm-end">

Designed By <a href="https://htmlcodex.com">HTML Codex</a>
</div>
</div>
</div>
</div>
```


## Check, Radio, switch
![image](https://github.com/Gitart/HTML/assets/3950155/201df2ef-2ba5-4659-8db6-23036a986011)

```html
<div class="col-sm-12 col-xl-6">
<div class="bg-light rounded h-100 p-4">
<h6 class="mb-4">Check, Radio &amp; Switch</h6>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
Default checkbox
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="">
<label class="form-check-label" for="flexCheckChecked">
Checked checkbox
</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
<label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
<label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="">
<label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
<hr>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
<label class="form-check-label" for="flexRadioDefault1">
Default radio
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked="">
<label class="form-check-label" for="flexRadioDefault2">
Default checked radio
</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
<label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
<label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="">
<label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
<hr>
<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
<label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox
input</label>
</div>
<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked="">
<label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox
input</label>
</div>
<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled="">
<label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox
input</label>
</div>
<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked="" disabled="">
<label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked
switch checkbox input</label>
</div>
</div>
</div>
```

## 404 page
![image](https://github.com/Gitart/HTML/assets/3950155/106167dd-1d45-404c-bb57-3a60f85e8f6b)

```html
<div class="container-fluid pt-4 px-4">
<div class="row vh-100 bg-light rounded align-items-center justify-content-center mx-0">
<div class="col-md-6 text-center p-4">
<i class="bi bi-exclamation-triangle display-1 text-primary"></i>
<h1 class="display-1 fw-bold">404</h1>
<h1 class="mb-4">Page Not Found</h1>
<p class="mb-4">We’re sorry, the page you have looked for does not exist in our website!
Maybe go to our home page or try to use a search?</p>
<a class="btn btn-primary rounded-pill py-3 px-5" href="">Go Back To Home</a>
</div>
</div>
</div>
```

## Empty page
```html
<div class="container-fluid pt-4 px-4">
<div class="row vh-100 bg-light rounded align-items-center justify-content-center mx-0">
<div class="col-md-6 text-center">
<h3>This is blank page</h3>
</div>
</div>
</div>
```

## Dashboard
![image](https://github.com/Gitart/HTML/assets/3950155/e44e44f5-e16a-49a7-9974-3b73b63ef358)

```html
<div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-line fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-bar fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-area fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-pie fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
```
## Bub


![image](https://github.com/Gitart/HTML/assets/3950155/1b6bfe96-eb6c-4b68-af48-2035d631c3ec)
```html
<div class="col-sm-12 col-xl-6">
<div class="bg-light rounded h-100 p-4">
<h6 class="mb-4">Vertical Navs &amp; Tabs</h6>
<div class="d-flex align-items-start">
<div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
<button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">Home</button>
<button class="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</button>
<button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
<button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
</div>
<div class="tab-content" id="v-pills-tabContent">
<div class="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
Consetetur at sit est sit ut ipsum clita at. Sit elitr sit sea dolor tempor eos sit, erat diam ea rebum clita no ea. Et amet sed nonumy sadipscing dolor et ut sed et. Stet eirmod est nonumy clita invidunt rebum. Nonumy dolor ut diam invidunt eirmod nonumy sed gubergren,.
</div>
<div class="tab-pane fade active show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
Tempor et kasd accusam duo et dolor no accusam dolore, dolor sed voluptua duo no, sit et stet lorem dolor ipsum tempor consetetur vero, consetetur est eos sit eirmod erat diam accusam sadipscing sit. Takimata erat ea eirmod tempor elitr dolore sadipscing kasd justo, elitr tempor sed eos sadipscing magna.
</div>
<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
Sed kasd kasd ea clita sed lorem amet tempor est voluptua, labore stet dolores gubergren clita lorem sed nonumy at. Dolores et ut erat voluptua. Est voluptua stet accusam rebum, elitr amet sit takimata sea eirmod. Sanctus elitr amet sit dolore sea stet et ut. Dolor et sanctus elitr ut.
</div>
<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
Sit et vero kasd sea et at, aliquyam takimata et et est, labore et takimata sed ut stet sanctus, nonumy dolor invidunt sit labore et, amet et dolor sit dolor tempor et dolor ipsum nonumy, accusam clita sadipscing ut et labore labore est, dolore accusam vero at est sit. Invidunt.
</div>
</div>
</div>
</div>
</div>
```

## Grid
```html
<!DOCTYPE html>
<html>
<head>
<style>
.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
</style>
</head>
<body>

<h1>Grid Layout</h1>

<p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning:</p>

<div class="grid-container">
  <div class="item1">Header</div>
  <div class="item2">Menu</div>
  <div class="item3">Main</div>  
  <div class="item4">Right</div>
  <div class="item5">Footer</div>
</div>

</body>
</html>
```

## Messages
![image](https://github.com/Gitart/HTML/assets/3950155/00831c33-76b5-4c03-a564-0032e0bab281)

```html
<div class="col-sm-12 col-md-6 col-xl-4">
                        <div class="h-100 bg-light rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <h6 class="mb-0">Messages</h6>
                                <a href="">Show All</a>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-3">
                                <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-3">
                                <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-3">
                                <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center pt-3">
                                <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                        </div>
                    </div>
```


## Todo list
![image](https://github.com/Gitart/HTML/assets/3950155/8a6514e8-3c23-4896-981f-2ef61a8c9d64)

```html
<div class="col-sm-12 col-md-6 col-xl-4">
                        <div class="h-100 bg-light rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">To Do List</h6>
                                <a href="">Show All</a>
                            </div>
                            <div class="d-flex mb-2">
                                <input class="form-control bg-transparent" type="text" placeholder="Enter task">
                                <button type="button" class="btn btn-primary ms-2">Add</button>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox" checked="">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span><del>Short task goes here...</del></span>
                                        <button class="btn btn-sm text-primary"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center border-bottom py-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center pt-2">
                                <input class="form-check-input m-0" type="checkbox">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
```

## Left menu
![image](https://github.com/Gitart/HTML/assets/3950155/69434907-6c32-4f77-b3cd-16a07b485f51)

```html
<div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-light navbar-light">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
                </a>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <a href="index.html" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Elements</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="button.html" class="dropdown-item">Buttons</a>
                            <a href="typography.html" class="dropdown-item">Typography</a>
                            <a href="element.html" class="dropdown-item">Other Elements</a>
                        </div>
                    </div>
                    <a href="widget.html" class="nav-item nav-link active"><i class="fa fa-th me-2"></i>Widgets</a>
                    <a href="form.html" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</a>
                    <a href="table.html" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Tables</a>
                    <a href="chart.html" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Pages</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="signin.html" class="dropdown-item">Sign In</a>
                            <a href="signup.html" class="dropdown-item">Sign Up</a>
                            <a href="404.html" class="dropdown-item">404 Error</a>
                            <a href="blank.html" class="dropdown-item">Blank Page</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
```




















