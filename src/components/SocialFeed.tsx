import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Star,
  Heart,
  MessageCircle,
  Share2,
  Users,
  Plus,
  Sparkles,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";

interface FeedPost {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  type: "review" | "progress" | "recommendation";
  book: {
    title: string;
    author: string;
    cover: string;
  };
  content: string;
  rating?: number;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

interface Friend {
  id: string;
  name: string;
  avatar?: string;
  booksRead: number;
  isFollowing: boolean;
  commonBooks: number;
}

export function SocialFeed() {
  const [activeTab, setActiveTab] = useState("feed");

  const feedPosts: FeedPost[] = [
    {
      id: "1",
      user: { name: "김민수", avatar: undefined },
      type: "review",
      book: {
        title: "1984",
        author: "조지 오웰",
        cover:
          "https://images.unsplash.com/photo-1755188977089-3bb40306d57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZSUyMGJvb2t8ZW58MXx8fHwxNzU2MjE3OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      content:
        "정말 충격적인 작품이었습니다. 현재 우리 사회와 너무 많은 부분이 닮아있어서 소름이 돋았어요. 특히 빅브라더의 감시 시스템은 현대의 디지털 감시와 매우 유사하다고 느꼈습니다.",
      rating: 5,
      timestamp: "2시간 전",
      likes: 12,
      comments: 5,
      isLiked: false,
    },
    {
      id: "2",
      user: { name: "이지영", avatar: undefined },
      type: "progress",
      book: {
        title: "해리포터와 마법사의 돌",
        author: "J.K. 롤링",
        cover:
          "https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1NjIwNDM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      content:
        "드디어 완독했습니다! 어릴 때 읽었던 기억과는 또 다른 감동이 있네요. 성인이 되어 읽으니 더 깊이 있는 메시지들이 보였어요.",
      timestamp: "5시간 전",
      likes: 8,
      comments: 3,
      isLiked: true,
    },
    {
      id: "3",
      user: { name: "박준호", avatar: undefined },
      type: "recommendation",
      book: {
        title: "코스모스",
        author: "칼 세이건",
        cover:
          "https://images.unsplash.com/photo-1554357395-dbdc356ca5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU2MjUxNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      content:
        "과학에 관심있는 분들께 강력 추천! 우주의 신비와 과학의 아름다움을 일반인도 쉽게 이해할 수 있도록 설명해주는 명저입니다.",
      timestamp: "1일 전",
      likes: 15,
      comments: 7,
      isLiked: false,
    },
  ];

  const friends: Friend[] = [
    {
      id: "1",
      name: "김민수",
      booksRead: 24,
      isFollowing: true,
      commonBooks: 8,
    },
    {
      id: "2",
      name: "이지영",
      booksRead: 18,
      isFollowing: true,
      commonBooks: 5,
    },
    {
      id: "3",
      name: "박준호",
      booksRead: 31,
      isFollowing: true,
      commonBooks: 12,
    },
    {
      id: "4",
      name: "최서연",
      booksRead: 22,
      isFollowing: false,
      commonBooks: 3,
    },
  ];

  const aiDiscussions = [
    {
      id: "1",
      book: "1984",
      question:
        "빅브라더의 감시 시스템은 현재 우리 사회의 어떤 측면과 비교할 수 있을까요?",
      participants: 8,
    },
    {
      id: "2",
      book: "해리포터 시리즈",
      question:
        "호그와트의 기숙사 시스템이 현실의 교육에 적용될 수 있는 장단점은 무엇일까요?",
      participants: 12,
    },
    {
      id: "3",
      book: "코스모스",
      question:
        "칼 세이건이 말한 '우주적 관점'이 현대인의 삶에 어떤 의미를 가질 수 있을까요?",
      participants: 6,
    },
  ];

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case "review":
        return <Star className="size-4" />;
      case "progress":
        return <MessageCircle className="size-4" />;
      case "recommendation":
        return <Share2 className="size-4" />;
      default:
        return <MessageCircle className="size-4" />;
    }
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case "review":
        return "리뷰 작성";
      case "progress":
        return "완독 완료";
      case "recommendation":
        return "추천 공유";
      default:
        return "활동";
    }
  };

  const PostCard = ({ post }: { post: FeedPost }) => (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={post.user.avatar} />
              <AvatarFallback>
                {post.user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.user.name}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {getPostTypeIcon(post.type)}
                <span>{getPostTypeLabel(post.type)}</span>
                <span>•</span>
                <span>{post.timestamp}</span>
              </div>
            </div>
          </div>
          {post.rating && (
            <div className="flex items-center gap-1">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <span>{post.rating}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-3">
          <ImageWithFallback
            src={post.book.cover}
            alt={post.book.title}
            className="w-16 h-24 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1">
            <h4>{post.book.title}</h4>
            <p className="text-muted-foreground">
              {post.book.author}
            </p>
            <p className="mt-2 text-sm">{post.content}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className={post.isLiked ? "text-red-500" : ""}
            >
              <Heart
                className={`size-4 mr-1 ${post.isLiked ? "fill-current" : ""}`}
              />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="size-4 mr-1" />
              {post.comments}
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <Share2 className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6">
      <h1 className="mb-6">북클럽 & 소셜</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="feed">피드</TabsTrigger>
          <TabsTrigger value="friends">친구</TabsTrigger>
          <TabsTrigger value="discussions">AI 토론</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="mt-6 space-y-4">
          {feedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>

        <TabsContent value="friends" className="mt-6">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-5" />
                  친구 목록
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {friends.map((friend) => (
                    <div
                      key={friend.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-accent/50"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={friend.avatar} />
                          <AvatarFallback>
                            {friend.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {friend.name}
                          </p>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>
                              읽은 책 {friend.booksRead}권
                            </span>
                            <span>
                              공통 {friend.commonBooks}권
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant={
                          friend.isFollowing
                            ? "secondary"
                            : "default"
                        }
                        size="sm"
                      >
                        {friend.isFollowing
                          ? "팔로잉"
                          : "팔로우"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="discussions" className="mt-6">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="size-5" />
                  AI 토론 주제
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiDiscussions.map((discussion) => (
                    <div
                      key={discussion.id}
                      className="p-4 border rounded-lg space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">
                          {discussion.book}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="size-4" />
                          <span>
                            {discussion.participants}명 참여
                          </span>
                        </div>
                      </div>
                      <p className="font-medium">
                        {discussion.question}
                      </p>
                      <Button size="sm" className="w-full">
                        토론 참여하기
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}