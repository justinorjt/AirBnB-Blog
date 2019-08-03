import { Component, OnInit, Input } from '@angular/core';
import { BlogPostService } from 'src/app/_services/blog-post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-blog-post-view',
	templateUrl: './blog-post-view.component.html',
	styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent implements OnInit {

	post: any;

	constructor(
		private bps: BlogPostService,
		private route: ActivatedRoute,
		) { }

	ngOnInit() {

		this.getPost();
	}

	getPost(): void {
		const titleLink = this.route.snapshot.paramMap.get('titleLink');
		this.bps.getBlogPost(titleLink)
		.subscribe(post => { this.post = JSON.parse(post);
			console.log(this.post);
		});
			console.log(titleLink);
	}

}