import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "child_parent") 

export class child_parent {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    child_id: number;    // here we create relation with child table
 
    @Column() 
    parent_id: number;    // here we create relation with parent table

}