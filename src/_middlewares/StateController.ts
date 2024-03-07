import { v4 as uuid } from 'uuid';


// Interfaces para representar os tipos de dados
export interface Game {
    id: string;
    title: string;
    category: string;
    url: string;
    description: string;
    imageUrl?: string;
  }
  
  export interface Review {
    gameId: string;
    userId: string;
    rating: number;
    comment: string;
  }
  
  export interface User {
    id?: string;
    username: string;
    password: string;
    email: string;
    imageUrl?: string;
    data?: UserData
  }

  export interface UserData{
    birthdate: Date,
    country: string
    state: string,
    fullName: string
  }
  
  export interface UserLogin {
    email: string;
    password: string;
  }
  
  // Classe StateController para gerenciar o estado
  export abstract class StateController {
    private static _currentUser: User | null = null
    private static _users: User[] = [
        {id: uuid(),
        email: 'admin@gmail.com',
        password: 'admin123',
        username: 'admin',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2991/2991252.png'
        }
    ];

    private static games: Game[] = [];

    private static reviews: Review[] = [];
  
    // Método estático para adicionar um novo usuário
    static addUser(user: User) {
      const userToAdd:User = {...user,
        id: uuid(),
        email: user.email.toLowerCase(),
        username: user.username.toLowerCase()
        }
      StateController._users.push(userToAdd);
    }
  
    // Método estático para verificar se um usuário existe
    static userExists(email: string): boolean {
      return StateController._users.some(user => user.email.toLowerCase() === email);
    }
  
    // Método estático para fazer login
    static login({ email, password }: UserLogin): User | null {
      const user = StateController._users.find(user => user.email.toLowerCase() === email && user.password === password);
      StateController._currentUser = user ? user : null
      return StateController._currentUser;
    }

    static getCurrentUser():User | null{
      return StateController._currentUser;
    }

    static getToTest(): User{
      return StateController._users[0]
    }

    static logoff(){
      StateController._currentUser = null
    }

    // Método estático para adicionar um novo jogo
  static addGame(game: Game) {
    StateController.games.push(game);
  }

  // Método estático para obter todos os jogos
  static getGames(): Game[] {
    return StateController.games;
  }

  // Método estático para adicionar uma nova avaliação
  static addReview(review: Review) {
    StateController.reviews.push(review);
  }

  // Método estático para obter todas as avaliações
  static getReviews(): Review[] {
    return StateController.reviews;
  }
  }
  