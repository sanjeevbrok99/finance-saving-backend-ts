import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "child_parent") 

export class child_parent {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    child: number;    // here we create relation with child table
 
    @Column() 
    family_member: number;   // here we create relation with parent table
   
    @Column() 
    relationship: string; 
}