import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
    @Entity('chore_template_category')
    export class chore_template_category {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

    }