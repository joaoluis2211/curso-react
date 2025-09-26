import { Client, TablesDB, Storage, Query, ID } from "appwrite";
import conf from "../conf/conf.js"

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }


    async getPost(slug) {
        try {
            return await this.databases.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
        } catch (error) {
            console.log("Appwrite service :: getRow() :: ", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries
            })
        } catch (error) {
            console.log("Appwrite service :: listRows() :: ", error);
            return false
        }
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data:
                {
                    title, content, featuredImage, status, userId
                }
            })
        } catch (error) {
            console.log("Appwrite service :: createRow() :: ", error);
            return false
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data:
                {
                    title, content, featuredImage, status
                }
            })
        } catch (error) {
            console.log("Appwrite service :: updateRow() :: ", error);
            return false
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteRow() :: ", error);
            return false
        }
    }

    // storage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file
            })
        } catch (error) {
            console.log("Appwrite service :: createFile() :: ", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            })
        } catch (error) {
            console.log("Appwrite service :: createFile() :: ", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId: fileId
        }).href
    }
}

const service = new Service()
export default service;