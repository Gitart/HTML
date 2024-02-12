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























