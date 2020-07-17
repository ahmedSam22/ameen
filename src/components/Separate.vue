<template>
    <div class="container-fluid">
        <div class="row">
<div class="col-md-12 col-sm-12 col-12 main">
   <div class="media">
  <div class="media-body">
    <h5 class="mt-0 orange--text text-right"> {{h5}} </h5>
<p class="text-right"> {{p}} </p>  </div>
  <img class="ml-3" src="../assets/logo.png" alt="Generic placeholder image" width="64" height="64">

</div>
</div>
        </div>
    </div>
</template>
<script>
export default {
    name : "Separate",
    data(){
        return{
            h5 : " لتوضيح مثال" //to edit the header text. 
            ,
            p : " ضع النص الذي تريده هنا  " //to edit the paragraph


        }
    }
}
</script>
<style scoped>
.main {
    background-color : #3B2521;
    margin-top: 10px;
    border-right: solid 3px red;
    font-weight: bold;
    width: 100px;
    height: auto;
    overflow: visible;
}
p {
    color: #E0DCDC;
}
</style>