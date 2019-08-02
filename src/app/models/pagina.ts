import { User } from './user';

export class Pagina {

    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];

    constructor() {
        this.data = [];
        this.total_pages = 1;
    }

    deserialize(args: any) {
        Object.assign(this, args);
        return this;
    }

    get list_pages() {
        return Array(this.total_pages).fill(1).map((x, i) => i + 1);
    }
    
}