<template>
    <div class="vit-course">
        <div class=""></div>
    </div>
</template>

<script>
import { viewCourseDetail } from '@/api/course'
export default {
    created () {
        this.getCourseDetail()
    },
    methods: {
        getCourseDetail () {
            let that = this
            viewCourseDetail(that.$route.params.id).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style lang="less" scoped>
 @import './course.less';
</style>
