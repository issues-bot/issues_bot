import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import * as SpreadsheetController from '../controllers/spreadsheet.controller';
import * as IssuesBotTwitter from '../controllers/issuesBotTwitter.controller';
const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

// Google Spreadsheet data
// TODO: move to another routes file later
router.route('/sheet/stop').get(SpreadsheetController.getStopData);
router.route('/sheet/representative').get(SpreadsheetController.getRepresentativeData);

// Pulls issues bot tweets
router.route('/issue_bot').post(IssuesBotTwitter.getIssueBotTweets);


export default router;
