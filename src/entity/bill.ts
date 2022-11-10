import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "bill") 

export class bill {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column("varchar", { length: 200 }) 
    title: string; 
  
    @Column() 
    created_on: string;
    
    @Column() 
    total_amount: number; 
  
    @Column()                        // here we create relation with directuse_user table
    user: number; 
}