export interface Post {
	timestamp: string;
	title: string;
	message: string;
	context: string;
	tags: string[];
	location: string;
	images?: string[];
	externalLinks: string[];
	numLikes: number;
	numBookmarks: number;
	numViews: number;
}

export const dummyPosts: Post[] = [
	{
		timestamp: "2024-08-22T10:30:00Z",
		title: "Exploring the Beauty of Nature",
		message:
			"Today, I ventured into the heart of the Redwood National Park. The towering trees and serene atmosphere were truly breathtaking.",
		context: "Nature Exploration",
		tags: ["nature", "travel", "adventure", "redwoods"],
		location: "Redwood National Park, California",
		images: [],
		externalLinks: ["https://www.nps.gov/redw/index.htm"],
		numLikes: 120,
		numBookmarks: 45,
		numViews: 300,
	},
	{
		timestamp: "2024-08-21T14:15:00Z",
		title: "Delicious Vegan Recipes",
		message:
			"Check out my favorite vegan recipes that are both healthy and easy to prepare!",
		context: "Food & Cooking",
		tags: ["vegan", "recipes", "healthy eating"],
		location: "Home Kitchen",
		images: [],
		externalLinks: ["https://www.vegankitchen.com"],
		numLikes: 85,
		numBookmarks: 30,
		numViews: 250,
	},
	{
		timestamp: "2024-08-20T09:00:00Z",
		title: "Tech Innovations in 2024",
		message:
			"This year has seen some amazing tech innovations! Here's a roundup of the most exciting advancements.",
		context: "Technology",
		tags: ["technology", "innovation", "2024"],
		location: "Silicon Valley, California",
		images: [],
		externalLinks: ["https://www.technews.com/2024-innovations"],
		numLikes: 200,
		numBookmarks: 75,
		numViews: 500,
	},
	{
		timestamp: "2024-08-19T17:45:00Z",
		title: "Fitness Journey: 6 Months In",
		message:
			"I've been on my fitness journey for six months now, and here are some tips that have helped me stay motivated!",
		context: "Health & Fitness",
		tags: ["fitness", "motivation", "health"],
		location: "Local Gym",
		images: [],
		externalLinks: ["https://www.fitnessjourney.com"],
		numLikes: 150,
		numBookmarks: 60,
		numViews: 400,
	},
	{
		timestamp: "2024-08-18T12:00:00Z",
		title: "Traveling Through Italy",
		message:
			"Italy is a dream destination! Here are my top five places to visit when you're there.",
		context: "Travel",
		tags: ["travel", "Italy", "tourism"],
		location: "Rome, Italy",
		images: [],
		externalLinks: ["https://www.italytravel.com"],
		numLikes: 300,
		numBookmarks: 100,
		numViews: 600,
	},
	{
		timestamp: "2024-08-17T08:30:00Z",
		title: "Mindfulness Practices for Everyday Life",
		message:
			"Incorporating mindfulness into your daily routine can transform your life. Here are some practices to try!",
		context: "Wellness",
		tags: ["mindfulness", "wellness", "self-care"],
		location: "Home",
		images: [],
		externalLinks: ["https://www.mindfulness.com"],
		numLikes: 90,
		numBookmarks: 40,
		numViews: 350,
	},
	{
		timestamp: "2024-08-16T15:00:00Z",
		title: "DIY Home Decor Ideas",
		message:
			"Transform your living space with these easy and budget-friendly DIY home decor projects!",
		context: "Home Improvement",
		tags: ["DIY", "home decor", "crafts"],
		location: "My Living Room",
		images: [],
		externalLinks: ["https://www.diyhomedecor.com"],
		numLikes: 110,
		numBookmarks: 50,
		numViews: 280,
	},
	{
		timestamp: "2024-08-15T11:20:00Z",
		title: "The Art of Photography",
		message:
			"Discover the basics of photography and how to capture stunning images with your camera.",
		context: "Photography",
		tags: ["photography", "art", "tips"],
		location: "City Park",
		images: [],
		externalLinks: ["https://www.photographytips.com"],
		numLikes: 145,
		numBookmarks: 65,
		numViews: 390,
	},
	{
		timestamp: "2024-08-14T09:45:00Z",
		title: "Top 10 Books of 2024",
		message:
			"Here are the top ten must-read books of this year that you won't want to miss!",
		context: "Books & Literature",
		tags: ["books", "reading", "2024"],
		location: "Local Library",
		images: [],
		externalLinks: ["https://www.bookreviews.com/top10"],
		numLikes: 200,
		numBookmarks: 80,
		numViews: 500,
	},
	{
		timestamp: "2024-08-13T13:30:00Z",
		title: "Gardening Tips for Beginners",
		message:
			"Start your gardening journey with these essential tips and tricks for beginners!",
		context: "Gardening",
		tags: ["gardening", "tips", "nature"],
		location: "Backyard Garden",
		images: [],
		externalLinks: ["https://www.gardening101.com"],
		numLikes: 95,
		numBookmarks: 35,
		numViews: 320,
	},
	{
		timestamp: "2024-08-12T16:00:00Z",
		title: "Exploring the World of Anime",
		message:
			"Dive into the fascinating world of anime with these top recommendations for every fan!",
		context: "Entertainment",
		tags: ["anime", "movies", "recommendations"],
		location: "Home Theater",
		images: [],
		externalLinks: ["https://www.animehub.com"],
		numLikes: 130,
		numBookmarks: 55,
		numViews: 410,
	},
	{
		timestamp: "2024-08-11T18:15:00Z",
		title: "Mindful Meditation Techniques",
		message:
			"Learn about effective meditation techniques to enhance your mindfulness practice.",
		context: "Wellness",
		tags: ["meditation", "mindfulness", "wellness"],
		location: "Yoga Studio",
		images: [],
		externalLinks: ["https://www.mindfulmeditation.com"],
		numLikes: 160,
		numBookmarks: 70,
		numViews: 480,
	},
	{
		timestamp: "2024-08-10T10:00:00Z",
		title: "Travel Essentials for Your Next Trip",
		message:
			"Don't forget these travel essentials for a smooth and enjoyable journey!",
		context: "Travel",
		tags: ["travel", "essentials", "packing"],
		location: "Airport",
		images: [],
		externalLinks: ["https://www.traveltips.com/essentials"],
		numLikes: 210,
		numBookmarks: 90,
		numViews: 550,
	},
	{
		timestamp: "2024-08-09T14:45:00Z",
		title: "The Future of Renewable Energy",
		message:
			"Explore the latest advancements in renewable energy and their impact on our planet.",
		context: "Environment",
		tags: ["renewable energy", "sustainability", "environment"],
		location: "Environmental Conference",
		images: [],
		externalLinks: ["https://www.renewablefuture.com"],
		numLikes: 175,
		numBookmarks: 65,
		numViews: 450,
	},
	{
		timestamp: "2024-08-08T12:30:00Z",
		title: "Fashion Trends to Watch in 2024",
		message:
			"Stay ahead of the curve with these fashion trends that are set to dominate this year!",
		context: "Fashion",
		tags: ["fashion", "trends", "2024"],
		location: "Fashion Show",
		images: [],
		externalLinks: ["https://www.fashiontrends.com/2024"],
		numLikes: 220,
		numBookmarks: 85,
		numViews: 600,
	},
	{
		timestamp: "2024-08-07T09:00:00Z",
		title: "Understanding Cryptocurrency",
		message:
			"A beginner's guide to understanding cryptocurrency and how to get started with investing.",
		context: "Finance",
		tags: ["cryptocurrency", "investing", "finance"],
		location: "Home Office",
		images: [],
		externalLinks: ["https://www.cryptoguide.com"],
		numLikes: 190,
		numBookmarks: 75,
		numViews: 500,
	},
];
