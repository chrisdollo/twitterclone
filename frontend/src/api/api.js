import { supabase } from './supabase'

// fetch all users from the database
export async function getUsers() {
    const { data, error } = await supabase.from('users').select('*')
    if (error) throw error
    return data
}

// fetch the IDs of all users that userId is following
export async function getFollowing(userId) {
    const { data, error } = await supabase
        .from('follows')
        .select('following_id')
        .eq('follower_id', userId)
    if (error) throw error
    return data.map(row => row.following_id)
}

// follow a user
export async function followUser(followerId, followingId) {
    const { error } = await supabase
        .from('follows')
        .insert({ follower_id: followerId, following_id: followingId })
    if (error) throw error
}

// fetch the IDs of all users that follow userId
export async function getFollowers(userId) {
    const { data, error } = await supabase
        .from('follows')
        .select('follower_id')
        .eq('following_id', userId)
    if (error) throw error
    return data.map(row => row.follower_id)
}

// unfollow a user
export async function unfollowUser(followerId, followingId) {
    const { error } = await supabase
        .from('follows')
        .delete()
        .eq('follower_id', followerId)
        .eq('following_id', followingId)
    if (error) throw error
}

// create a new user
export async function createUser(username, display_name) {
    const { data, error } = await supabase
        .from('users')
        .insert({ username, display_name })
        .select()
        .single()
    if (error) throw error
    return data
}


// create a new post
export async function createPost(user_id, content) {

    console.log("This is the id: ", user_id )
    console.log("This is the content: ", content)
    const { data, error } = await supabase
        .from('posts')
        .insert({ user_id: user_id, content: content })
        .select()
        .single()
    if (error) throw error
    return data
}


// fetch all posts, including the author's display_name from the users table
export async function getPosts() {
    const { data, error } = await supabase
        .from('posts')
        .select('*, users(display_name)')
    if (error) throw error
    return data
}
