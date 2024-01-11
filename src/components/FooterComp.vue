<!--Footer-->
<template> 
    <div class="container-fluid d-flex justify-content-center fixed-bottom" id="footer" >
        <div class="row">
            <p class="lead">
                tlgc  All Rights Reserved&copy; 
                <span>{{ currYear }}</span> <br>
                <!--Do not forget to add insta,github,indeed,facebook-->
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data() {
            return {
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
#footer {
    background-color: black;
    color: white;
    font-weight: 400;
    display: flex;
    
}
</style>