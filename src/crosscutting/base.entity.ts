import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

export abstract class Base {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date
}
