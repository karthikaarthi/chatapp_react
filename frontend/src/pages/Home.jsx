import { MessageSquare, Search, Send } from 'lucide-react'
import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'

const Home = () => {
  const {getUser}= useChatStore()
  useEffect(()=>{
    getUser()
  })
  return (
  
    <div className="h-screen bg-base-200 pt-16">
      <div className="h-full max-w-7xl mx-auto p-4">

        <div className="h-full bg-base-100 rounded-2xl shadow-lg overflow-hidden flex">

          {/* LEFT SIDE - USERS */}
          <div className="w-80 border-r border-base-300 flex flex-col">

            {/* Header */}
            <div className="p-4 border-b border-base-300">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="size-6 text-primary" />

                <h2 className="text-lg font-bold">
                  Chats
                </h2>
              </div>

              {/* Search */}
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search users..."
                  className="input input-bordered w-full pl-10"
                />
              </div>
            </div>

            {/* User List */}
            <div className="flex-1 overflow-y-auto">

              {/* User */}
              <div className="flex items-center gap-3 p-4 cursor-pointer hover:bg-base-200 transition">

                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src="https://i.pravatar.cc/150?img=1"
                      alt="User"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">
                    John
                  </h3>

                  <p className="text-sm text-base-content/60 truncate">
                    Hey, how are you?
                  </p>
                </div>

                <div className="w-2 h-2 rounded-full bg-success"></div>
              </div>

              {/* User */}
              <div className="flex items-center gap-3 p-4 cursor-pointer hover:bg-base-200 transition">

                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src="https://i.pravatar.cc/150?img=5"
                      alt="User"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">
                    Sarah
                  </h3>

                  <p className="text-sm text-base-content/60 truncate">
                    See you tomorrow!
                  </p>
                </div>

                <div className="w-2 h-2 rounded-full bg-base-content/30"></div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - CHAT */}
          <div className="flex-1 flex flex-col">

            {/* Chat Header */}
            <div className="h-16 border-b border-base-300 flex items-center px-5">

              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="John"
                  />
                </div>
              </div>

              <div className="ml-3">
                <h3 className="font-semibold">
                  John
                </h3>

                <p className="text-xs text-success">
                  Online
                </p>
              </div>

            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">

              {/* Received */}
              <div className="flex justify-start">
                <div className="bg-base-200 rounded-2xl rounded-bl-none px-4 py-2 max-w-xs">
                  <p>
                    Hey! How are you?
                  </p>

                  <span className="text-xs text-base-content/50">
                    10:30 AM
                  </span>
                </div>
              </div>

              {/* Sent */}
              <div className="flex justify-end">
                <div className="bg-primary text-primary-content rounded-2xl rounded-br-none px-4 py-2 max-w-xs">
                  <p>
                    I'm good! How about you?
                  </p>

                  <span className="text-xs opacity-70">
                    10:31 AM
                  </span>
                </div>
              </div>

              {/* Received */}
              <div className="flex justify-start">
                <div className="bg-base-200 rounded-2xl rounded-bl-none px-4 py-2 max-w-xs">
                  <p>
                    I'm doing great!
                  </p>

                  <span className="text-xs text-base-content/50">
                    10:32 AM
                  </span>
                </div>
              </div>

            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-base-300">

              <div className="flex items-center gap-2">

                <input
                  type="text"
                  placeholder="Type a message..."
                  className="input input-bordered flex-1"
                />

                <button className="btn btn-primary">
                  <Send size={20} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Home
