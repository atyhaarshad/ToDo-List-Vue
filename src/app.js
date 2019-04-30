import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			items: [
				{ task: "Get shopping", priority: "low" },
				{ task: "MOT", priority: "high" },
				{ task: "Clean bathroom", priority: "low" },
			],
			newItem: ""
		},
		methods: {
			saveNewItem: function(){
				this.items.push({
					task: this.newItem,
					priority: this.newItem.priority,
				});
				this.newItem = ""
			},

		}
	});
});
