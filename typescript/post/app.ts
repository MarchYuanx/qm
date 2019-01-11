// 枚举
enum PostStatus {
  Unpublished,
  Published,
  Draft
}

interface Post {
  title: string;
  content?: string;
  status: PostStatus;
}

let post: Post = {
  title: '过五关斩六将,去辽微软',
  content: '春招以来,我的面试好起来辽',
  status: PostStatus.Draft
}

console.log(post)
console.log(PostStatus[0]);