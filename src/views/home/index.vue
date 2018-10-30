<template>
    <div>
        <Carousel autoplay v-model="value2" loop height="300px">
            <CarouselItem>
                <div class="demo-carousel">1</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">2</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">3</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">4</div>
            </CarouselItem>
        </Carousel>
        <Row>
            <Col span="16">col-12</Col>
            <Col span="8">col-12</Col>
        </Row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
