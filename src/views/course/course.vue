<template>
    <Row type="flex" justify="center" class="vit-course">
        <Col span="20">
            <Row class="vit-course-top">
                <Col span="12" :style="{backgroundImage: 'url('+ courseImg +')'}" class="vit-course-top-img"></Col>
                <Col span="11" offset="1"></Col>
            </Row> 
            <Tabs style="height: 500px">
                <TabPane label="课程介绍" icon="ios-bookmarks">标签一的内容</TabPane>
                <TabPane label="课程评价" icon="ios-bookmarks">暂无评价</TabPane>
            </Tabs>
            <Tabs>
                <TabPane label="相关课程推荐" icon="ios-bookmarks">
                    <vit-cate :cardList="cardList"  @on-select="view"></vit-cate>
                </TabPane>
            </Tabs>

        </Col>
    </Row>
</template>

<script>
import { viewCourseDetail } from '@/api/course'
import vitCate from '_c/vitCate'
export default {
    components: {
        vitCate
    },
    data () {
        return {
            courseImg: 'https://img1.ph.126.net/PB4vJMMi3OdPd3U8YmrE1A==/6608179232143845685.jpg',
            cardList: []
        }
    },
    created () {
        this.getCourseDetail()
    },
    methods: {
        getCourseDetail () {
            let that = this
            viewCourseDetail(that.$route.params.id).then(res => {
                console.log(res)
            })
        },
        view (id) {
            console.log(id)
        }
    }
}
</script>

<style lang="less" scoped>
 @import './course.less';
</style>
