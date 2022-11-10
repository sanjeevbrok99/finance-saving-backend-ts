import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
    @Entity('chores_directus_user')
    export class chores_directus_user {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      chores: number;

      @Column()
      image: number;

      @Column()
      category: number;


    }