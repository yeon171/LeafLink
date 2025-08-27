import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Plus, MoreVertical } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating?: number;
  myRating?: number;
  progress?: number;
  review?: string;
  notes?: string;
  genre: string;
  status: 'reading' | 'completed' | 'want-to-read';
}

export function MyLibrary() {
  const [books] = useState<Book[]>([
    {
      id: '1',
      title: '1984',
      author: '조지 오웰',
      cover: 'https://images.unsplash.com/photo-1755188977089-3bb40306d57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZSUyMGJvb2t8ZW58MXx8fHwxNzU2MjE3OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.5,
      myRating: 5,
      progress: 75,
      genre: '디스토피아',
      status: 'reading',
      notes: '사회와 정치에 대한 날카로운 통찰'
    },
    {
      id: '2',
      title: '해리포터와 마법사의 돌',
      author: 'J.K. 롤링',
      cover: 'https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1NjIwNDM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      myRating: 5,
      genre: '판타지',
      status: 'completed',
      review: '마법의 세계로 빠져들게 하는 놀라운 작품. 상상력이 정말 대단하다.'
    },
    {
      id: '3',
      title: '코스모스',
      author: '칼 세이건',
      cover: 'https://images.unsplash.com/photo-1554357395-dbdc356ca5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU2MjUxNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      genre: '과학',
      status: 'want-to-read'
    },
    {
      id: '4',
      title: '오만과 편견',
      author: '제인 오스틴',
      cover: 'https://images.unsplash.com/photo-1605515531924-3b350eac4075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBib29rfGVufDF8fHx8MTc1NjI1MTU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.6,
      genre: '로맨스',
      status: 'want-to-read'
    }
  ]);

  const getBooksByStatus = (status: Book['status']) => {
    return books.filter(book => book.status === status);
  };

  const BookCard = ({ book }: { book: Book }) => (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <ImageWithFallback
              src={book.cover}
              alt={book.title}
              className="w-16 h-24 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0 space-y-2">
            <div>
              <h4 className="truncate">{book.title}</h4>
              <p className="text-sm text-muted-foreground truncate">{book.author}</p>
              <Badge variant="outline" className="text-xs mt-1">{book.genre}</Badge>
            </div>
            
            {book.status === 'reading' && book.progress && (
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>진행률</span>
                  <span>{book.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all" 
                    style={{ width: `${book.progress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{book.myRating || book.rating}</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>리뷰 작성</DropdownMenuItem>
                  <DropdownMenuItem>메모 추가</DropdownMenuItem>
                  <DropdownMenuItem>평점 변경</DropdownMenuItem>
                  <DropdownMenuItem>상태 변경</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {book.review && (
              <div className="bg-accent/50 p-2 rounded text-sm">
                <p className="line-clamp-2">{book.review}</p>
              </div>
            )}

            {book.notes && (
              <div className="bg-muted p-2 rounded text-sm">
                <p className="line-clamp-2">{book.notes}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1>내 서재</h1>
        <Button>
          <Plus className="size-4 mr-2" />
          책 추가
        </Button>
      </div>

      <Tabs defaultValue="reading" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="reading">
            읽는 중 ({getBooksByStatus('reading').length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            읽은 책 ({getBooksByStatus('completed').length})
          </TabsTrigger>
          <TabsTrigger value="want-to-read">
            읽고 싶은 책 ({getBooksByStatus('want-to-read').length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="reading" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {getBooksByStatus('reading').map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {getBooksByStatus('completed').map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="want-to-read" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {getBooksByStatus('want-to-read').map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}