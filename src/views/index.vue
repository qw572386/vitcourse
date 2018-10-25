<template>
  <div class="layout">
    <Layout>
        <Header>
            <Menu mode="horizontal" theme="light" active-name="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        Item 4
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Content :style="{padding: '10px'}">
            <Card>
                <div style="min-height: 200px;">
                    Content
                </div>
            </Card>
        </Content>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
    </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.layout{
    border: 1px solid #ffffff;
    background: #ffffff;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    &-logo{
      width: 100px;
      height: 30px;
      background: #ffffff;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
    }
    &-nav{
      width: 420px;
      margin: 0 auto;
      margin-right: 20px;
    }
    &-footer-center{
      text-align: center;
    }
}
</style>
