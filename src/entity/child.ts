import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
    @Entity('child')
    export class Child {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @Column()        // here we will create relationship with user model using foreign key
      userId:number

      @Column({ nullable: true })
      theme: string | null;
    
     
      @Column({ nullable: true })
      owner: string | null;

      @CreateDateColumn()
      createdAt: Date;
    
    }