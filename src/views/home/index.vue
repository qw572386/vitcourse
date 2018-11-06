<template>
    <div>
        <!-- <Carousel autoplay v-model="value2" loop :height="300">
            <CarouselItem v-for="(item, index) in carouselList" :key="`carouselitem${index}`">
                <div class="demo-carousel">
                    <img :src="item.bgUrl" alt="">
                </div>
            </CarouselItem>
        </Carousel> -->
        <vit-carousel :carouselConfig="carouselConfig" :carouselList="carouselList" @on-click="view"></vit-carousel>
        <Row :gutter="10">
            <Col :xs="24" :sm="{ span: 16, offset: 1 }">
                <Row class="main-content">
                    <Col :xs="24" :sm="12" :md="8" :lg="6" v-for="(item, index) in cardList" :key="`card_${index}`" class="main-content-col">
                        <Card>
                            <div style="text-align:center" @click="view(item.id)">
                                <img :src="item.src">
                                <h3>{{ item.title }}</h3>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col :xs="24" :sm="6">
            you
            </Col>
        </Row>
    </div>
</template>

<script>
    // import { mapActions } from 'vuex'
    import { getCarousel } from '@/api/app'
    import vitCarousel from '_c/vitCarousel'
    export default {
        components: {
            vitCarousel
        },
        data () {
            return {
                value2: 2,
                carouselConfig: {
                    height: 350,
                    loop: false,
                    autoplay: true,
                    arrow: 'always',
                    speed: 2000,
                    radiusDot: true
                },
                carouselList: [],
                cardList: [
                    {
                        src: '',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: '',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: '',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: '',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: '',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: '',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                ]
            }
        },
        methods: {
        //   ...mapActions ([
        //     'getCarousel'
        //   ]),
          view(id) {
            this.$router.push({path: `/detail/${id}`})
          }
        },
        mounted () {
          getCarousel().then(res => {
            this.carouselList = res.data
          })
        }
    }
</script>

<style lang="less" scoped>
.main-content{
    &-col{
        padding: 5px;
    }
}
</style>
