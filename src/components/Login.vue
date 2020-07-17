<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-3 col-sm-12 col-12 mt-3 p-3 main" >

                <form>
<form>
    <div class="form-group">
    <label for="exampleInputEmail1 d-inline">ادخل الاسم بالكامل </label>
    <input type="text" class="form-control" id="exampleInputtext" aria-describedby="emailHelp" placeholder="اكتب الاسم " style="width:100%">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1 d-inline">ادخل البريد الالكتروني</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="اكتب البريد الالكتروني" style="width:100%">
    <small id="emailHelp" class="form-text text-muted text-right">لن نشارك بريدك الالكتروني مع اي شخص</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1 d-inline">ادخل  كلمة المرور</label>
    <input type="password" class="form-control" id="exampleInputpassword" aria-describedby="emailHelp" placeholder="اكتب كلمة المرور " style="width:100%">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">تأكيد كلمة  المرور</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="اكتب كلمة المرور">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">تذكرني</label>
  </div>
  <button type="submit" class="btn orange">تسجيل</button>
</form>

                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Sign'
}
</script>
<style scoped>
.form-group {
          direction: ltr;

}
.main {
    background-color: rgba(255, 215, 1, 0.6);
}
</style>