import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Target, BookOpen, Calendar, Award, Edit } from "lucide-react";

export function Statistics() {
  const monthlyData = [
    { month: '1월', books: 3 },
    { month: '2월', books: 4 },
    { month: '3월', books: 2 },
    { month: '4월', books: 5 },
    { month: '5월', books: 3 },
    { month: '6월', books: 4 },
    { month: '7월', books: 6 },
    { month: '8월', books: 2 }
  ];

  const genreData = [
    { name: '소설', value: 35, color: '#8884d8' },
    { name: '인문', value: 25, color: '#82ca9d' },
    { name: 'SF/판타지', value: 20, color: '#ffc658' },
    { name: '자기계발', value: 12, color: '#ff7300' },
    { name: '과학', value: 8, color: '#0088fe' }
  ];

  const yearlyGoals = [
    {
      title: '연간 독서 목표',
      current: 29,
      target: 48,
      unit: '권',
      progress: (29 / 48) * 100,
      color: 'bg-blue-500'
    },
    {
      title: '다양한 장르 읽기',
      current: 5,
      target: 8,
      unit: '장르',
      progress: (5 / 8) * 100,
      color: 'bg-green-500'
    },
    {
      title: '리뷰 작성',
      current: 18,
      target: 30,
      unit: '편',
      progress: (18 / 30) * 100,
      color: 'bg-purple-500'
    }
  ];

  const achievements = [
    { title: '첫 완독', icon: '📚', date: '2024.01.15', description: '첫 번째 책을 완독했습니다!' },
    { title: '한 달 5권 읽기', icon: '🏆', date: '2024.04.30', description: '4월에 5권을 읽었습니다!' },
    { title: '다양한 장르 탐험가', icon: '🌟', date: '2024.07.20', description: '5개 이상의 장르를 읽었습니다!' },
    { title: '꾸준한 독서가', icon: '🔥', date: '2024.08.01', description: '3개월 연속 목표를 달성했습니다!' }
  ];

  const totalBooksRead = monthlyData.reduce((sum, month) => sum + month.books, 0);
  const avgBooksPerMonth = (totalBooksRead / monthlyData.length).toFixed(1);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1>통계 & 목표</h1>
        <Button variant="outline">
          <Edit className="size-4 mr-2" />
          목표 설정
        </Button>
      </div>

      {/* 요약 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="size-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">총 읽은 책</p>
                <p className="text-2xl">{totalBooksRead}권</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">월평균</p>
                <p className="text-2xl">{avgBooksPerMonth}권</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="size-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">목표 달성률</p>
                <p className="text-2xl">60%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Award className="size-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">획득 뱃지</p>
                <p className="text-2xl">{achievements.length}개</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 월별 독서량 차트 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="size-5" />
            월별 독서량
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="books" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 장르별 비율 */}
        <Card>
          <CardHeader>
            <CardTitle>장르별 독서 비율</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genreData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {genreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {genreData.map((genre, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: genre.color }}
                  />
                  <span className="text-sm">{genre.name} ({genre.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 목표 달성률 */}
        <Card>
          <CardHeader>
            <CardTitle>2024년 독서 목표</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {yearlyGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{goal.title}</h4>
                  <span className="text-sm text-muted-foreground">
                    {goal.current}/{goal.target} {goal.unit}
                  </span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  {Math.round(goal.progress)}% 달성
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 성취 뱃지 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="size-5" />
            획득한 뱃지
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <Badge variant="outline" className="text-xs mt-1">{achievement.date}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}