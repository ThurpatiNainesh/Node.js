// 2** successful
// 200===>successful;

// 4** client error
// 400====>Bad request
// 401====>Unauthorized 
// 403====>unAuthorized(forbidden)
// 403====>Resource not found

// 5** server error
// 500===>internal server error 
// 503===>service unavaible
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// REDDIS 
// (CACHE) TEMPARARY DATA
// Redis is a No SQL database which works on the concept of key-value pair.
// Redis is a NoSQL database which follows the principle of key-value store. The key-value store provides ability to store some data called a value, inside a key. You can recieve this data later only if you know the exact key used to store it.
// Redis supports various types of data structures like strings, hashes, lists, sets, sorted sets, bitmaps, hyperloglogs and geospatial indexes with radius queries.

// Following is the list of main features of Redis:

// Speed: Redis stores the whole dataset in primary memory that's why it is extremely fast. It loads up to 110,000 SETs/second and 81,000 GETs/second can be retrieved in an entry level Linux box. Redis supports Pipelining of commands and facilitates you to use multiple values in a single command to speed up communication with the client libraries.

// Persistence: While all the data lives in memory, changes are asynchronously saved on disk using flexible policies based on elapsed time and/or number of updates since last save. Redis supports an append-only file persistence mode. Check more on Persistence, or read the AppendOnlyFileHowto for more information.

// Data Structures: Redis supports various types of data structures such as strings, hashes, sets, lists, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries.

// Atomic Operations: Redis operations working on the different Data Types are atomic, so it is safe to set or increase a key, add and remove elements from a set, increase a counter etc.

// Supported Languages: Redis supports a lot of languages such as ActionScript, C, C++, C#, Clojure, Common Lisp, D, Dart, Erlang, Go, Haskell, Haxe, Io, Java, JavaScript (Node.js), Julia, Lua, Objective-C, Perl, PHP, Pure Data, Python, R, Racket, Ruby, Rust, Scala, Smalltalk and Tcl.

// Master/Slave Replication: Redis follows a very simple and fast Master/Slave replication. It takes only one line in the configuration file to set it up, and 21 seconds for a Slave to complete the initial sync of 10 MM key set on an Amazon EC2 instance.

// Sharding: Redis supports sharding. It is very easy to distribute the dataset across multiple Redis instances, like other key-value store.
// AD

// Portable: Redis is written in ANSI C and works in most POSIX systems like Linux, BSD, Mac OS X, Solaris, and so on. Redis is reported to compile and work under WIN32 if compiled with Cygwin, but there is no official support for Windows currently.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// AWS-S3
// S3 is a safe place to store the files.
// It is Object-based storage, i.e., you can store the images, word files, pdf files, etc.
// The files which are stored in S3 can be from 0 Bytes to 5 TB.
// It has unlimited storage means that you can store the data as much you want.
// Files are stored in Bucket. A bucket is like a folder available in S3 that stores the files.
// S3 is a universal namespace, i.e., the names must be unique globally. Bucket contains a DNS address. Therefore, the bucket must contain a unique name to generate a unique DNS address.

// Create Buckets: Firstly, we create a bucket and provide a name to the bucket. Buckets are the containers in S3 that stores the data. Buckets must have a unique name to generate a unique DNS address.

// Storing data in buckets: Bucket can be used to store an infinite amount of data. You can upload the files as much you want into an Amazon S3 bucket, i.e., there is no maximum limit to store the files. Each object can contain upto 5 TB of data. Each object can be stored and retrieved by using a unique developer assigned-key.

// Download data: You can also download your data from a bucket and can also give permission to others to download the same data. You can download the data at any time whenever you want.

// Permissions: You can also grant or deny access to others who want to download or upload the data from your Amazon S3 bucket. Authentication mechanism keeps the data secure from unauthorized access.

// Standard interfaces: S3 is used with the standard interfaces REST and SOAP interfaces which are designed in such a way that they can work with any development toolkit.

// Security: Amazon S3 offers security features by protecting unauthorized users from accessing your data.
// S3 is a simple key-value store

// S3 is object-based. Objects consist of the following:

// Key: It is simply the name of the object. For example, hello.txt, spreadsheet.xlsx, etc. You can use the key to retrieve the object.
// Value: It is simply the data which is made up of a sequence of bytes. It is actually a data inside the file.
// Version ID: Version ID uniquely identifies the object. It is a string generated by S3 when you add an object to the S3 bucket.
// Metadata: It is the data about data that you are storing. A set of a name-value pair with which you can store the information regarding an object. Metadata can be assigned to the objects in Amazon S3 bucket.
// Subresources: Subresource mechanism is used to store object-specific information.
// Access control information: You can put the permissions individually on your files.

