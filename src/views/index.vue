<style lang="less" scoped>
 @import './index.less';
</style>

<template>
    <div class="layout">
        <Layout>
            <Header class="layout-header">
                <Menu mode="horizontal" theme="light" active-name="1" class="layout-header-menu">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            文章分类
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            标签
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            日志
                        </MenuItem>
                    </div>
                    <div class="layout-setting">
                        <Dropdown>
                            <a href="javascript:void(0)">
                                <Icon type="md-contact" />
                                齐伟
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>个人中心</DropdownItem>
                                <DropdownItem>设置</DropdownItem>
                                <DropdownItem divided>退出</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </Menu>
            </Header>
            <Content class="layout-content">
                <router-view />
            </Content>
            <Footer class="layout-footer-center">2018-2020 &copy; qiwei</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        
    }
</script>
