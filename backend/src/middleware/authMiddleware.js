import {clerkClient} from "@clerk/express";


export const protectRoute = async (req, res, next) => {
if(!req.auth.userId) {
    res.status(401).json({success: false, message: "Unauthorized - you must be logged in"})
    return
}
next()
}

export const requireAdmin = async (req, res, next) => {
    try{
        const currentUser = await clerkClient.users.getUser(req.auth.userId)
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress()

        if (!isAdmin) {
            return res.status(403).json({success: false, message: "Forbidden - you do not have permission to access this resource"})
        }
    }
catch(err){
    console.log(err)
    res.status(500).json({success: false, message: "Internal server error"})
}
}