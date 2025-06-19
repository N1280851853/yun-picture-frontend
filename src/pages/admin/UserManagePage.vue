<template>
  <div id="userManagePage">
    <!--搜索框-->
    <a-form layout="inline" :model="searchParams" @finish="doSearch">
      <a-form-item label="账号">
        <a-input allow-clear v-model:value="searchParams.userAccount" placeholder="输入账号" />
      </a-form-item>
      <a-form-item label="用户名">
        <a-input allow-clear v-model:value="searchParams.userName" placeholder="输入用户名" />
      </a-form-item>

      <a-form-item label="用户角色">
        <a-select
          v-model:value="searchParams.userRole"
          placeholder="选择用户角色"
          allow-clear
          style="width: 200px"
        >
          <a-select-option value="user">user</a-select-option>
          <a-select-option value="admin">admin</a-select-option>
        </a-select>

      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">搜索</a-button>
      </a-form-item>
    </a-form>


    <!--表格-->
    <a-table :columns="columns"
             :data-source="dataList"
             :pagination="pagination"
             @change="doTableChange">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'userAvatar'">
          <a-image :src="record.userAvatar" :width="120" />
        </template>
        <template v-else-if="column.dataIndex === 'userRole'">
          <div v-if="record.userRole === 'admin'">
            <a-tag color="green">管理员</a-tag>
          </div>
          <div v-else>
            <a-tag color="blue">普通用户</a-tag>
          </div>
        </template>
        <template v-else-if="column.key === 'action'">
          <a-button danger @click="doDelete(record.id)">删除</a-button>
        </template>
      </template>

    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue'
import { computed, onMounted, reactive, ref } from 'vue'
import { deleteUserByIdUsingPost, listPageUserUsingPost } from '@/api/userController'
import { message } from 'ant-design-vue'

const columns = [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: '账号',
    dataIndex: 'userAccount'
  },
  {
    title: '用户名',
    dataIndex: 'userName'
  },
  {
    title: '头像',
    dataIndex: 'userAvatar'
  },
  {
    title: '简介',
    dataIndex: 'userProfile'
  },
  {
    title: '用户角色',
    dataIndex: 'userRole'
  },
  {
    title: '创建时间',
    dataIndex: 'gmtCreate'
  },
  {
    title: '更新时间',
    dataIndex: 'gmtModified'
  },
  {
    title: '操作',
    key: 'action'
  }
]

// 数据
const dataList = ref<API.ListPageUserVO[]>([])
const total = ref(0)

// 搜索条件
const searchParams = reactive<API.ListPageUserQO>({
  pageNum: 1,
  pageSize: 10,
  userName: '',
  userAccount: '',
  userRole: ''
})

// 分页参数
const pagination = computed(() => {
  return {
    pageNum: searchParams.pageNum ?? 1,
    pageSize: searchParams.pageSize ?? 10,
    total: total.value,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条`
  }
})

// 表格变化处理
const doTableChange = (page: any) => {
  searchParams.pageNum = page.current
  searchParams.pageSize = page.pageSize
  fetchData()
}


// 获取数据
const fetchData = async () => {
  const res = await listPageUserUsingPost({
    ...searchParams
  })
  if (res.data.code === 200 && res.data.data) {
    dataList.value = res.data.data.list ?? []
    total.value = res.data.data.totalRow ?? 0
  } else {
    message.error('获取数据失败，' + res.data.message)
  }
}

// 获取数据
const doSearch = () => {
  // 重置页码
  searchParams.pageNum = 1
  fetchData()
}

// 删除数据
const doDelete = async (id: string) => {
  if (!id) {
    return
  }
  const res = await deleteUserByIdUsingPost({ id })
  if (res.data.code === 200) {
    message.success('删除成功')
    // 刷新数据
    fetchData()
  } else {
    message.error('删除失败')
  }
}



// 页面加载时请求一次
onMounted(() => {
  fetchData()
})

</script>

