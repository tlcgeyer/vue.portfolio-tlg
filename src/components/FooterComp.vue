<!--Footer-->
<template> 
    <div class="container">
        <div class="row justify-content-center sticky-lg-bottom">
            <p class="lead">
                tlgc CopyRights&copy; 
                <span>{{ currYear }}</span>
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

</style>