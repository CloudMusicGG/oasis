<!--
 * @Author: your name
 * @Date: 2019-11-14 19:52:22
 * @LastEditTime: 2019-12-01 13:49:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\qingting\src\components\goback1.vue
 -->
<template>
	<div>
		<div class="top">
			<i class="el-icon-arrow-left" @click="goback"></i>
			<!-- <img src="../assets/forward.png" @click="goback"> -->
			  <p >{{infor}}</p>
		</div>
	</div>
	
</template>
<script>
export default{
	name:'goback',
	props:['infor'],
	data(){
		return{
			
		}
	},
	methods:{
		goback(){
			//因为router有历史记录这一功能
			 this.$router.go(-1);
		}
	}
		
}	
</script>
<style lang="scss" scoped="" type="text/css">
.top{
	overflow: hidden;
	height: .42rem;
	float: left;
	i{
		font-size: .21rem;
		color: #3c3b3c;
		margin-top: .13rem;
	}
}
p{
	/* width:.25rem; */
	height:.42rem;
	 float: right;
	 font-size:.18rem;
	 color: #434343;
	margin-top:.12rem;
	margin-right: 10px;
}
</style>