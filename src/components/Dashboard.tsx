import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Star, Target, TrendingUp } from "lucide-react";

export function Dashboard() {
  const todayRecommendation = {
    title: "데미안",
    author: "헤르만 헤세",
    cover: "https://images.unsplash.com/photo-1620647885779-064b00c4c139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBub3ZlbHxlbnwxfHx8fDE3NTYyNTE1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    aiReason: "최근 읽으신 성장소설과 철학적 작품들을 바탕으로, 자아 탐구와 성장에 대한 깊이 있는 통찰을 제공하는 이 작품을 추천드립니다."
  };

  const goals = {
    monthlyTarget: 4,
    currentMonth: 2,
    yearlyTarget: 48,
    currentYear: 18
  };

  const friendActivities = [
    { name: "김민수", book: "1984", action: "완독", time: "2시간 전" },
    { name: "이지영", book: "해리포터와 마법사의 돌", action: "리뷰 작성", time: "5시간 전" },
    { name: "박준호", book: "코스모스", action: "읽기 시작", time: "1일 전" }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="mb-6">홈 대시보드</h1>
      
      {/* 오늘의 추천 책 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="size-5" />
            오늘의 AI 추천 도서
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <ImageWithFallback
                src={todayRecommendation.cover}
                alt={todayRecommendation.title}
                className="w-24 h-32 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <h3>{todayRecommendation.title}</h3>
                <p className="text-muted-foreground">{todayRecommendation.author}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span>{todayRecommendation.rating}</span>
                </div>
              </div>
              <div className="bg-accent p-3 rounded-lg">
                <p className="text-sm">{todayRecommendation.aiReason}</p>
              </div>
              <Button className="w-full">내 서재에 추가</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 목표 진행률 */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="size-5" />
              이번 달 읽기 목표
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-2xl">{goals.currentMonth}/{goals.monthlyTarget}권</div>
              <p className="text-muted-foreground">완료</p>
            </div>
            <Progress value={(goals.currentMonth / goals.monthlyTarget) * 100} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>50% 달성</span>
              <span>목표까지 2권</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="size-5" />
              올해 읽기 목표
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-2xl">{goals.currentYear}/{goals.yearlyTarget}권</div>
              <p className="text-muted-foreground">완료</p>
            </div>
            <Progress value={(goals.currentYear / goals.yearlyTarget) * 100} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>37.5% 달성</span>
              <span>목표까지 30권</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 최근 친구 활동 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="size-5" />
            최근 친구 활동
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {friendActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm">{activity.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium">{activity.name}</p>
                    <p className="text-sm text-muted-foreground">
                      "{activity.book}" {activity.action}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">{activity.time}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}