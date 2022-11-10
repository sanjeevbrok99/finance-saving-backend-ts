import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "child_debit_card") 

export class child_debit_card {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    name_on_card: string; 
 
    @Column() 
    created_on: Date; 

    @Column() 
    expiry_date: string; 
 
    @Column() 
    child: number;     // here we create relation with child table

    @Column() 
    category: string; 
 
    @Column() 
    cardproxynumber: string; 
}