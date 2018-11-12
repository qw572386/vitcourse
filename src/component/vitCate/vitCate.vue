<template>
    <div class="vit-cate">
        <slot name="vit-cate-title"></slot>
        <Row class="vit-cate-content" type="flex" justify="center">
            <Col :xs="12" :sm="10" :md="5" v-for="(item, index) in cardList" :key="`card_${index}`" class="vit-cate-content-item">
                <div @click="handleClick(item.id)" class="vit-course-item">
                    <div class="vit-course-item-img" :style="{backgroundImage: 'url('+ item.src +')'}"></div>
                    <h3 class="vit-course-item-title">{{ item.title }}</h3>
                </div>
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
        },
        methods: {
            handleClick (id) {
                this.$emit('on-select', id)
            }
        }
    }
</script>

<style lang="less" scoped>
.vit-cate{
    &-content{
        &-item{
            padding: 5px;
            .vit-course-item{
                padding: 0;
                border: 1px solid #dcdee2;
                border-radius: 4px;
                cursor: pointer;
                &:hover{
                    box-shadow: 0 1px 6px rgba(0,0,0,.2);
                    border-color: #eee;
                }
                &-img{
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 200px;
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                }
                &-title{
                    padding: 15px 10px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    font-size: 1rem;
                }
            }
            
        }
    }
}
</style>
