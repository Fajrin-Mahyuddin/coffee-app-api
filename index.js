const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { firebaseAdminConfig } = require('./admin-firebase');
const port = 8181;

const data = [
	{
		image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
		,
		title: 'Coffee one',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'New',
		rate: 4,
		id: 1,
		price: 155,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
		,
		title: 'Coffee two',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'Rental',
		rate: 4,
		id: 2,
		price: 100,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
		,
		title: 'Coffee three',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'New',
		rate: 5,
		id: 3,
		price: 200,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
		,
		title: 'Coffee four',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'Used',
		rate: 3,
		id: 4,
		price: 125,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee five',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'New',
		rate: 5,
		id: 5,
		price: 120,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee six has been change',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 4,
		condition: 'Used',
		rate: 4,
		id: 6,
		price: 270,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee seven was change',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'New',
		rate: 2,
		id: 7,
		price: 180,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee eight',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'Renewed',
		rate: 3,
		id: 8,
		price: 20,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee nine',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'New',
		rate: 4,
		id: 9,
		price: 30,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee ten',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'Renewed',
		rate: 5,
		id: 10,
		price: 110,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
		,
		title: 'Coffee eleven',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Manual', color: 'info' }, { tag: 'Automatic', color: 'primary' }],
		discount: 5,
		condition: 'New',
		rate: 4,
		id: 11,
		price: 155,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
		,
		title: 'Coffee twelve',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'Rental',
		rate: 4,
		id: 12,
		price: 100,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee thirteen',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'New',
		rate: 5,
		id: 13,
		price: 100,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80'
		,
		title: 'Coffee fourteen',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'Used',
		rate: 3,
		id: 14,
		price: 15,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2509&q=80'
		,
		title: 'Coffee fiveteen',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'New',
		rate: 5,
		id: 15,
		price: 120,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2538&q=80'
		,
		title: 'Coffee sixteen has been change',
		category: "best",
		weight: 20,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 4,
		condition: 'Used',
		rate: 4,
		id: 16,
		price: 70,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee seventeen',
		category: "best",
		weight: 10,
		tags: [{ tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'New',
		rate: 2,
		id: 17,
		price: 80,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee eighteen',
		category: "best",
		weight: 2300,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'Renewed',
		rate: 3,
		id: 18,
		price: 120,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee nineteen',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'New',
		rate: 4,
		id: 19,
		price: 30,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
	{
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'
		,
		title: 'Coffee twenty',
		category: "best",
		weight: 200,
		tags: [{ tag: 'Machine', color: 'primary' }, { tag: 'Manual', color: 'info' }],
		discount: 5,
		condition: 'Renewed',
		rate: 5,
		id: 20,
		price: 110,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia molestias tenetur recusandae debitis corrupti quibusdam sint incidunt quidem architecto eveniet a inventore, voluptate cumque obcaecati eligendi vitae rerum dicta? Reprehenderit explicabo tempore iste minus ea optio illum incidunt rerum quasi nemo repellat, tempora quia dolorem ad cupiditate. Aspernatur voluptatibus nulla, ratione porro optio laborum, est quas pariatur illo recusandae labore ipsam laboriosam modi fuga repudiandae iure earum eligendi voluptas autem ducimus! Totam quae vero incidunt nihil nesciunt enim cum, mollitia magni, ad fugiat facere temporibus quas sapiente est in accusamus inventore repellat quibusdam alias quod quasi deleniti quo. Officiis.'
	},
];

const db_cart = []

app.use(cors());
app.use(bodyParser.json());

app.get('/products', (req, res) => {
	const limit = req.query.limit;
	const dataLimit = data.slice(0, limit)
	res.json(dataLimit)
});

app.get('/product/:id', (req, res) => {
	const id = Number(req.params.id);
	const dataFilter = data.filter(item => item.id === id);
	res.json({ ...dataFilter[0] })
});

app.post('/product/cart/add', (req, res) => {
	const { data } = req.body;
	const check = db_cart.findIndex(item => item.uid === data.uid);
	console.log("----check item", check);
	if (check > 0) {
		console.log("----avail", db_cart[check]);
		let oldCart = db_cart[check].cart.filter(item => item.id !== data.item.id);
		let newCart = [...oldCart, data.item];
		db_cart[check] = { uid: data.uid, cart: newCart }
		res.status(200).json({ message: db_cart })
	} else {
		console.log("----NOT avail", check);
		db_cart.push({ uid: data.uid, cart: [data.item] });
		res.status(200).json({ message: db_cart })
	}
});

app.post('/auth/token-validate', async (req, res) => {
	const token = req.body;
	await firebaseAdminConfig.auth().verifyIdToken(token)
		.then(response => {
			res.status(200).json(response);
		}).catch(err => res.status(401).json(err))
})

app.get('/user/cart/:uid', (req, res) => {
	console.log("db cart----", req.params)
	res.status(200).json(db_cart.filter(item => item.uid === req.params.uid));
});

app.listen(port, () => console.log("I am listening !"))