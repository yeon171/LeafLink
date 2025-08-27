import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Sparkles, Search, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface RecommendedBook {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  genre: string;
  aiReason: string;
  similarity: number;
}

export function Recommendations() {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [recentBook, setRecentBook] = useState<string>("");
  
  const recommendations: RecommendedBook[] = [
    {
      id: '1',
      title: '멋진 신세계',
      author: '올더스 헉슬리',
      cover: 'https://images.unsplash.com/photo-1755188977089-3bb40306d57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZSUyMGJvb2t8ZW58MXx8fHwxNzU2MjE3OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.4,
      genre: '디스토피아',
      aiReason: '1984를 좋아하신다면, 이 작품도 사회 통제와 개인의 자유에 대한 깊이 있는 통찰을 제공합니다.',
      similarity: 92
    },
    {
      id: '2',
      title: '파운데이션',
      author: '아이작 아시모프',
      cover: 'https://images.unsplash.com/photo-1554357395-dbdc356ca5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU2MjUxNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.6,
      genre: 'SF',
      aiReason: '과학적 사고와 미래 사회에 대한 상상력을 바탕으로, 우주 문명의 흥망성쇠를 그린 걸작입니다.',
      similarity: 87
    },
    {
      id: '3',
      title: '나니아 연대기',
      author: 'C.S. 루이스',
      cover: 'https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1NjIwNDM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.5,
      genre: '판타지',
      aiReason: '해리포터를 즐기셨다면, 이 고전 판타지의 원조격인 작품이 새로운 마법의 세계로 안내해드릴 것입니다.',
      similarity: 85
    },
    {
      id: '4',
      title: '사랑의 기술',
      author: '에리히 프롬',
      cover: 'https://images.unsplash.com/photo-1605515531924-3b350eac4075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBib29rfGVufDF8fHx8MTc1NjI1MTU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.3,
      genre: '철학',
      aiReason: '사랑에 대한 깊이 있는 성찰을 통해 인간관계와 삶의 의미를 탐구하는 명저입니다.',
      similarity: 78
    }
  ];

  const genres = [
    '소설', '시/에세이', '인문', '사회과학', '자연과학', '기술공학',
    '예술', '종교', '철학', 'SF', '판타지', '미스터리', '로맨스', '자기계발'
  ];

  const RecommendationCard = ({ book }: { book: RecommendedBook }) => (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <ImageWithFallback
              src={book.cover}
              alt={book.title}
              className="w-20 h-28 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <h4>{book.title}</h4>
              <p className="text-muted-foreground">{book.author}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{book.rating}</span>
                </div>
                <Badge variant="outline">{book.genre}</Badge>
                <Badge variant="secondary" className="text-xs">
                  {book.similarity}% 매치
                </Badge>
              </div>
            </div>
            
            <div className="bg-accent/70 p-3 rounded-lg">
              <div className="flex items-start gap-2">
                <Sparkles className="size-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">{book.aiReason}</p>
              </div>
            </div>
            
            <Button className="w-full" size="sm">
              <Plus className="size-4 mr-2" />
              내 서재에 추가
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <h1>AI 도서 추천</h1>
      
      {/* 추천 설정 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="size-5" />
            맞춤 추천을 위한 정보
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="recent-book">최근 읽은 책</Label>
              <Input
                id="recent-book"
                placeholder="예: 1984, 해리포터..."
                value={recentBook}
                onChange={(e) => setRecentBook(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="genre">선호 장르</Label>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger>
                  <SelectValue placeholder="장르를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map(genre => (
                    <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full">
            <Sparkles className="size-4 mr-2" />
            AI 추천 받기
          </Button>
        </CardContent>
      </Card>

      {/* 추천 결과 */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="size-5 text-primary" />
          <h2>AI가 추천하는 도서</h2>
          <Badge variant="secondary">{recommendations.length}권</Badge>
        </div>
        
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
          {recommendations.map(book => (
            <RecommendationCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      {/* 추천 기준 설명 */}
      <Card>
        <CardHeader>
          <CardTitle>추천 알고리즘 정보</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• <strong>독서 취향 분석:</strong> 최근 읽은 책들의 장르, 주제, 작가 스타일을 분석합니다.</p>
            <p>• <strong>유사도 계산:</strong> 비슷한 독서 패턴을 가진 사용자들의 데이터를 활용합니다.</p>
            <p>• <strong>다양성 보장:</strong> 편향되지 않은 균형잡힌 추천을 위해 다양한 장르를 포함합니다.</p>
            <p>• <strong>개인화:</strong> 개인의 독서 목표와 선호도를 반영한 맞춤 추천을 제공합니다.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}