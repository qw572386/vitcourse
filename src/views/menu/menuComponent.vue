<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem v-for="(item, index) in menus" :name="item.name" :key="`menu_item_${index}`">
          <Icon v-if="item.icon" type="item.icon" />
          {{item.title}}
        </MenuItem>
    </Menu>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          title: "内容管理",
          name: '1',
          icon: 'ios-paper'
        },
        {
          title: "用户管理",
          name: '2',
          icon: 'ios-people'
        },
        {
          title: "统计分析",
          name: '3',
          icon: 'ios-stats',
          children: [
              {
                title: "新增和启动",
                name: '3-1',
              },
              {
                title: "活跃分析",
                name: '3-2',
              },
              {
                title: "时段分析",
                name: '3-3',
              },
          ]
        },
        {
          title: "内容管理",
          name: '4',
          icon: 'ios-paper',
          children: [
              {
                title: "用户留存",
                name: '4-1',
              },
              {
                title: "流失用户",
                name: '4-2',
              }
          ]
        },
      ]
    };
  },
  methods: {}
};
</script>
