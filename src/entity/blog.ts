import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "blog") 

export class blog {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    post_data: string; 
 
    @Column() 
    age_range: string; 

    @Column() 
    title: string; 
 
    @Column() 
    header_image: number; 

    @Column() 
    category: string; 
 
    @Column() 
    created_on: Date; 
}