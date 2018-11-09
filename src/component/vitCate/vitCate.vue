<template>
    <div class="vit-cate">
        <slot name="vit-cate-title"></slot>
        <Row class="vit-cate-content" type="flex" justify="center">
            <Col :xs="12" :sm="8" :md="6" v-for="(item, index) in cardList" :key="`card_${index}`" class="vit-cate-content-item">
                <Card>
                    <div style="text-align:center" @click="view(item.id)">
                        <img :src="item.src">
                        <h3>{{ item.title }}</h3>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'vitCate',
        props: {
            cardList: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
.vit-cate{
    &-content{
        &-item{
            padding: 5px;
        }
    }
}
</style>
