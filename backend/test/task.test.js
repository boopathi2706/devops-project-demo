const request=require('supertest');
const {app,server}=require('../index.js');
const mongoose=require('mongoose');

describe("GET /api/tasks",()=>{
    it("it return status code 200 ok",async()=>{
        const response=await request(app).get('/api/tasks');
        expect(response.statusCode).toBe(200);
    }),
    it("it return property task ok",async()=>{
        const response=await request(app).get('/api/tasks');
        expect(response.body).toHaveProperty('tasks');
    }),
    it("it return property task as array ok",async()=>{
        const response=await request(app).get('/api/tasks');
        expect(Array.isArray(response.body.tasks)).toBe(true);
    })
       
})


afterAll(async()=>{
    await mongoose.connection.close();
   await  server.close();
})
