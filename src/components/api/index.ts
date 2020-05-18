export const fetchData = async (q: string) => {
	try {
		const response = await fetch('https://www.reddit.com/r/' + q);
		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
	}
};

// export const fetchSubreddit = async (q: string) => {
// 	try {
// 		//const param: string = encodeURIComponent(q);
// 		const response = await fetch('https://www.reddit.com/r/' + q);
// 		const data = await response.json();
// 		return data.data;
// 		// const reducedTweets: any[] = [];
// 		// data.items.forEach((tweet: any) => {
// 		// 	reducedTweets.push({ id: tweet.id, text: tweet.text });
// 		// });
// 		//return reducedTweets;
// 	} catch (e) {
// 		console.log(e);
// 	}
// };
