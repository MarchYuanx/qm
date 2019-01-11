// 枚举
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Unpublished"] = 0] = "Unpublished";
    PostStatus[PostStatus["Published"] = 1] = "Published";
    PostStatus[PostStatus["Draft"] = 2] = "Draft";
})(PostStatus || (PostStatus = {}));
var post = {
    title: '过五关斩六将,去辽微软',
    content: '春招以来,我的面试好起来辽',
    status: PostStatus.Draft
};
console.log(post);
console.log(PostStatus[0]);
