<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h3 class="font-weight-bold orange--text text-center">من نحن</h3>
        <p class="text-right">
            {{about}}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {
    font-size: 22px;
    font-weight: bold;
}
</style>
<script>
export default {
    name : 'About',
    data(){
        return{//change text from here
            about : "أمين هو تطبيق وموقع الكتروني تم انشآه من قبل شركة سكن فاخر للصيانة و التشغيل يقدم خدمة طلب أعمال الصيانة المنزلية من كهرباء وسباكة و تحلية مياه و الكثير غيرها حيث يقدم اكثر من ١٥ خدمة صيانة رئيسية وغيرها فرعية يقدم أمين خدمة استعراض الفنيين واختيار الأنسب منهم حسب الخبرة و التسعيرة المناسبة للعميل يهدف أمين إلي دعم المهنيين المؤهلين من شباب الوطن والمقيمين ويتطلع أمين لتغطية كافة مناطق المملكة العربية السعودية و دول الخليج و الوطن العربي . من أولويات امين هو الربط بين مقدمي الخدمات وطالبي الخدمات بشكل سلسل يسير غير معقد حيث يعمل في أمين فريق محترف يعمل بجد يومياً للتأكد من وصول الخدمات للمستفيدين على اكمل وجه . رسالة أمين لا تجعل مشكلات الصيانة تأخذ الكثير من وقتك وجهدك في البحث عن افضل من يحلها لك يمكنك من خلال هاتفك الذكي استعراض واختيار افضل مقدمي هذه الخدمات من منزلك" 
        }
    }
}
</script>
