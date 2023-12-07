---
title: "Operating System Notes For Placement"
description: "Operating System Notes For Tech Placements"
tags: [blog, coding, computer-science, Operating System, Placements, OS]
date: 2023-06-10T19:58:26+08:00
lastmod: 2023-06-10T19:58:26+08:00
cover:
  image: "https://github.com/github/docs/assets/132539454/729957d1-0c1a-41b1-bd01-6a8f373e5081"
  alt: "Open External Links in a New Window Using Javascript"
  caption: "Open External Links in a New Window Using Javascript"

images:
  - https://github.com/github/docs/assets/132539454/729957d1-0c1a-41b1-bd01-6a8f373e5081

draft: false
author: "Samir Paul"
authorLink: "https://twitter.com/intent/follow?screen_name=SamirPaulb"
license: "CC BY 4.0"
draft: false

---


# Operating Systems Overview

<hr>

**Operating Systems** :
- Direct operational resources [CPU, memory, devices]
- Enforces working policies [Resource usage, access]
- Mitigates difficulty of complex tasks [abstract hardware details (using system calls)]

## What is an Operating System?

* Intermediate between Hardware and Software applications
* Hides hardware complexity (Read/write file storage, send/receive socket network)
* Handles resource management (CPU scheduling, Memory management)
* Provide isolation and protection (allocate different parts of memory to different applications so that applications don't overwrite other memory locations)

## Operating System definition:

An **Operating System** is a layer of systems software that:
* directly has privileged access to the underlying hardware;
* hides the hardware complexity;
* manages hardware on behalf of one or more application according to some predifined policies.
* In addition, it ensures that applications are isolated and protected from one another.

## Operating System examples:

Desktop|Embedded devices
-----------|------------
Microsoft Windows | Android OS 
MAC OS X (BSD) | iOS
LINUX | Symbian
...|...

## OS Elements

- **Abstractions** (corresponds to applications that OS executes)
	- process, thread, file, socket,  memory page
- **Mechanisms**  (on top of Abstractions)
	- create, schedule, open, write, allocate
- **Policies** (how mechanisms are used to manage underlying hardware)    
	- Least Recently Used (LRU) , Earliest Deadline First (EDF), etc.
    
#### Example :

_Memory Management:_

- **Abstractions**: Memory page
- **Mechanisms**: Allocate, map to a process
- **Policies**: LRU

## OS Design Principles

- Seperation of mechanism and policy
	- implement flexible mechanisms to support many policies 
    - e.g. LRU, LFU, random
- Optimize for common case 
	- Where will the OS be used?
    - What will the user want to execute on that machine?
    - What are the workload requirements?
    
## User/ Kernel Protection Boundary

* user-level => applications [underprivileged mode]
* kernel-level => OS Kernel [privileged access, hardware access]

![userkernelprotectionboundary](https://scdn.web.app/blog/os/userkernelprotectionboundary.png)

- User-Kernel switch is supported by hardware.
	- using trap instructions
    - system calls like:
    	- open (file)
        - send (socket)
        - malloc (memory)
	- signals
    
## System call Flowcart

![systemcallflowchart](https://scdn.web.app/blog/os/systemcallflowchart.png)
    
- To make a system call, an application must:
	- write arguments
    - save relevant data ast well defined location
    - make system calls using system call number
- In synchronous mode : wait until system call completes.

## Basic OS services

* process management
* file management
* device management
* memory management
* storage management
* security

## Linux System Calls

Task|Commands
------------ | ------------
Process Control | fork (); exit(); wait(); 
File Manipulation | open(); read(); write();
Device Manipulation | ioctl(); read(); write();
Information Maintenance | getpid(); alarm(); sleep();
Communication | pipe(); shmget(); mmap();
Protection | chmod(); umask(); chown();

## Linux Architecture 

![linuxarchitecture](https://scdn.web.app/blog/os/linuxarch.png)

<hr>


# Process and Process Management

**Process**: Instance of an executing program.

- State of execution
	- program counter, stack pointer
- Parts and temporary holding area
	- data, register state, occupies state in memory
- May require special hardware
	- I/O devices
    
Process is a state of a program when executing and loaded in memory (active state) as opposed to application (static state).

## What does a process look like?

![Process](https://scdn.web.app/blog/os/process.png)

### Type of state

- Text and Data
	- static state when process loads first
- Heap 
	- dynamically created during execution
- Stack
	- grows and shrinks 
    - LIFO queue (used to store task checkpoints to resume the original process after switching from another.)
    
## How does the OS know what a process is doing?

Using:

* Program counter
* CPU registers
* Stack pointer

## Process Control Block (PCB)

![PCB](https://scdn.web.app/blog/os/pcb.png)

* PCB created when process is created
* Certain fields are updated when process state change e.g. memory mapping
* or other fields that change very frequently e.g. Program Counter

## How is PCB used ?

![howpcbisused](https://scdn.web.app/blog/os/howpcbisused.png)

## Context Switch

* Mechanism used to switch from the context of one process to another in the CPU.

- They are expensive!
	- direct costs: no of cycles for load and store instructions.
    - indirect costs: **COLD** cache (read more [here](http://stackoverflow.com/questions/22756092/what-does-it-mean-by-cold-cache-and-warm-cache-concept))
		- Therefore limit frequency how context switching is done.

When a cache is **HOT**, most process data is in the cache so the process performance will be at its best.

Sometimes there are situations where we have to Context Switch (higher priority process, timesharing, etc.)

## Process Lifecycle

![processlifecycle](https://scdn.web.app/blog/os/processlifecycle.png)

CPU is able to execute a process when the process is in Running or Ready state.

## Process Creation

#### Mechanisms:

- fork :
	- copies the parent PCB into new child PCB
    - child contains execution at instruction after fork
    
- exec :
	- replace child image
    - load new program and start from first instruction
   
## What is the role of CPU scheduler?

CPU scheduler determines which one of the currently ready processes will be dispatched to the CPU to start running, and how long it should run for.

OS must :

* preempt => interrupt and save current context
* schedule => run scheduler to choose next process
* dispatch => dispatch process 2 switch into its context

## Scheduling design decisions

![timeslice](https://scdn.web.app/blog/os/timeslice.png)

* What are the appropriate timeslice values?
* Metrics to choose next process to run?

## I/O

A process can make way in the ready queue in a number of ways.

![io](https://scdn.web.app/blog/os/io.png)

## Can process interact?

#### Inter Process communication:

IPC mechanisms:

- transfer data/info between address space
- maintain protection and isolation
- provide flexibility and performance

Two types of IPC models:

####  1. **Message Passing IPC**

![messagepassing](https://scdn.web.app/blog/os/messagepassing.png)

* OS provides communication channel line shared buffer
* Processes can write(send), read(receive) msg to/from channel

**Advantages**: OS manages the channel<br>
**Disadvantages**: Overheads
    
#### 2. **Shared Memory IPC**

![sharedmemory](https://scdn.web.app/blog/os/sharedmemory.png)

* OS establishes a shared channel and maps it into each processes' address space
* Processes directly write(send), read(receive) msg to/from this memory

**Advantages**: OS is out of the way after establishing the shared channel<br>
**Disadvantages**: Re-implementing a lot of code that could have been done by the OS

Overall, **shared memory** based communication is better if mapping memory between two processes is ammortized over a large number of messages.

<hr>


# Threads and Concurrency

**Thread**:

- is an active
	- entity executing unit of a process
- works simultaneously with others
	- many threads execute together
- requires coordination
	- sharing of I/O devices, CPUs, memory
    
## Process vs Thread 

![processvthread](https://scdn.web.app/blog/os/processvthread.png)

## Why are threads useful?

* Parallelization => Speedup
* Specialization => Hot cache
* Efficiency => lower memory requirement & cheaper IPC
* Time for context switch in threads is less, since memory is shared, hence mapping is not required between virtual and physical memory.
	- Therefore multithreading can be used to hide latency.
* Benefits to both applicatioons and OS code 
	- Multithreaded OS kernel
		- threads working on behalf of applications
        - OS level services like daemons and drivers

## What do we need to support threads?

* Threads data structure
	- Identify threads, keep track of resource usage..
* Mechanisms to create and manage threads
* Mechanisms to safely coordinate among threads running concurrently in the same address space

## Concurrency control and Coordination

- Mutual exclusion 
	- Exclusive access to only one thread at a time
    - **mutex**
- Waiting on other threads
	- Specific condition before proceeding
    - **condition variable**
- Waking up other threads from wait state

## Threads and Threads creation 

- Thread data structure: 
	- Thread type, Thread ID, PC, SP, registers, stack, attributes.

- **Fork**(proc, args)
	- create a thread
    - not UNIX fork 
    
```
t1 = fork(proc, args)   
```

- **Join**(thread)
	- terminate a thread

```
child_result = join(t1)   
```

### Example:

```
Thread  t1;
Shared_List list;
t1 = fork(safe_insert, 4);
safe_insert(6);
join(t1); //Optional
```

The list can be accessed by reading shared variable.

## Mutual Exclusion

- Mutex data structure:
	- locked?, owner, blocked_threads
    
```
lock(mutex){
	//Critical Section
    //Only one thread can access at a time
}
unlock(mutex)
```
![mutex](https://scdn.web.app/blog/os/mutex.png)

## Producer Consumer problem

What if the processing you wish to perform with mutual exclusion needs to occur under certai conditions?

For e.g. The producer appends items to a list until the list is full, and the consumer has to print out all the items of the list once the list if full and then empty the list. Thus we have to execute the Consumer thread only under a certain condition (here- when the list becomes empty, print items).

Solution: Use **Condition Variables**

- Wait(mutex, condition)
	- mutex is automatically released and reaquired on wait
    - The consumer applies _Wait_ until the list is full
    
- Signal(condition)    
	- Notify only one thread waiting on condition
    - The Producer applies _Signal_ to the Consumer thread when the list is full
- Broadcast(condition)    
	- Notify all waiting threads
    
![producerconsumer](https://scdn.web.app/blog/os/producerconsumer.png)    

## Readers / Writer problem

* 0 or more readers can access a resource
* 0 or 1 writer can write the resource concurrently at the same time

- One solution:
	- lock on resource
    	- good for writer
    	- too restrictive for readers
        
- Better solution:

```
if ((read_count == 0) & (read_count == 0))
	R okay, W okay
if (read_count > 0)
	R okay    
if (read_count == 1)
	R not-okay, W not-okay    
```

State of shared resource:

* free : resource_counter = 0
* reading : resource_counter > 0
* writing : resource_counter = -1

Thus essentially we can apply mutex on the new proxy 'resource_counter' variable that represents the state of the shared resource.

## Avoiding common mistakes

- keep track of mutex/lock variable used with a resource
	- e.g. mutex_type m1; // mutex for file1
- check that you are always and correctly using lock and unlock 	- Compilers can be used as they generate errors/warnings to correct this type of mistake  	
- Use a single mutex to access a single resource
- check that you are signalling correct condition
- check that you are not using signal when broadcast is needed
	- signal : only 1 thread is will proceed, remaining threads will wait
- check thread execution order to be controlled by signals to condition variables

## Spurious(Unnecessary) Wake ups

When we wake up threads knowing they may not be able to proceed.

## Deadlocks

Two or more competing threads are said to be in a deadlock if they are waiting on each other to complete, but none of them ever do.

![deadlock](https://scdn.web.app/blog/os/deadlock.png)

Here T1 and T2 are in deadlock.

### How to avoid this?

1. Unlock T1 before locking T2
	- Fine-grained locking but T1 nad T2 may both be required
2. Use one mega lock, get all locks upfront, then release at end
	- For some applications this may be ok. But generally its too restrictive and limits parallelism
3. Maintain lock order
	- first m_T1
    - then m_T2 
    	- this will prevent cycles in wait graph

A cycle in wait graph is necessary and sufficient for deadlock to occur.<br> 
(thread-waiting-on-resource ---edge---> thread-owning-resource)

* Deadlock prevention => Expensive<br>
Pre-check for cycles and then delay process or change code

* Deadlock Detection and Recovery => Rollback

## Kernel vs User level Threads

![kernelvuserthread](https://scdn.web.app/blog/os/kernelvuserthread.png)

Three types of models:

#### 1. **One to One model**:

![onetoone](https://scdn.web.app/blog/os/onetoone.png)

**Advantages**: 

* OS sees threads
* Synchronization
* Blocking

**Disadvantages**: 

* Must go to OS for all operations
* OS may have limits on policies, threads
* Portability

#### 2. **Many to One model**:

![manytoone](https://scdn.web.app/blog/os/manytoone.png)

**Advantages**: 

* Totally Portable 
* Doesn't depend on OS limits and policies

**Disadvantages**: 

* OS may block entire process if one user-level thread blocks on I/O

#### 3. **Many to Many model**:

![manytomany](https://scdn.web.app/blog/os/manytomany.png)

**Advantages**: 

* Best of both worlds
* Can have bound or unbound threads

**Disadvantages**: 

* Requires coordination between user and kernel level thread managers

## Multithreading patterns

**1. Boss-Workers pattern**

* Boss- assigns work
* Workers- perform entire task

Throughput of system is limited by boss thread. Hence boss thread must be kept efficient.

Throughput = 1/boss-time-orders

Boss assigns works by:
1. Directly signalling specific works
	- **\+** workers don't need to sync
    - **\-** boss must keep track of everyone
2. Placing work in queue
	- **\+** boss doesn't neeed to know details about workers
    - **\-** queue synchronization

How many workers?
- on demand
- pool of workers
- static vs dynamic (i.e dynamically increasing size according to work)

**Advantages**: 

* Simplicity

**Disadvantages**: 

* Thread pool management
* Locality

**1B. Boss-Workers pattern variant**

* Here workers are specialized for certain tasks opposite to the previous equally created workers

**Advantages**: 
* Better locality
* Quality of Service management

**Disadvantages**: 
* Load balancing

**2. Pipeline pattern**

* Threads assigned one subtask in the system
* Entire task = Pipeline of threads
* Multiple tasks concurrently run in the system, in different pipeline stages
* Throughput depends on weakest link
* Shared buffer based communication between stages

**3. Layered pattern**

* Layers of threads are assigned group of related subtasks
* End to end task must pass up and down through all layers

**Advantages**: 
* Specialization
* Less fine-grained than pipeline

**Disadvantages**: 
* Not suitable for all applications
* Synchronization

### Example:

**Q)** For 6 step toy order application we have 2 solutions:

1. Boss-workers solution
2. Pipeline solution

Both have 6 threads. In the boss-workers solution, a worker produces a toy order in 120 ms. In the pipeline solution, each of 6 stages take 20 ms.

How long will it take for these solutions to complete 10 toy orders and 11 toy orders?

**A)** 6 threads means for Boss-workers, 1 thread is for boss, 5 for workers. In pipeline 6 threads are equally used.

For 10 toy orders:
```
Boss-workers(10) = 120 + 120 = 240 ms
Pipeline(10) = 120 + (9*20) = 300 ms
```
Here Boss-workers is better than Pipeline.

For 11 toy orders:
```
Boss-workers(11) = 120 + 120 + 120 = 360 ms
Pipeline(11) = 120 + (10*20) = 320 ms
```
Here Pipeline is better than Boss-workers.

This proves that choosing a better pattern depends on the number of threads and the work required to be done.

## PThreads

PThreads == POSIX Threads

POSIX = Portable OS interface

### Compiling PThreads

1. #include<pthread.h> in main file
2. Compile source with -lpthread or -pthread
```
gcc -o main main.c -lpthread
gcc -o main main.c -pthread
```
3. Check return values of common examples


### PThread mutexes
- to solve mutual exclusion problems among concurrent threads

### Safety tips

* Shared data should always be accessed through single mutex
* Mutex scope must be visible to all
* Globally order locks
	- for all threads, lock mutexes in order
* Always unlock a mutex (correctly)

## Thread Design Considerations

### Kernel vs User Level Threads

![userlevelvkernellevel](https://scdn.web.app/blog/os/userlevelvkernellevel.png)

### Thread related data structures

![threadds](https://scdn.web.app/blog/os/threadds.png)

### Hard vs Light Process states

PCB is divided into multiple data structures classified as follows:

- Light Process states
	- Signal mask 
    - System call args
- Heavy Process states 
	- virtual address mapping
    
#### Rationale for Multiple Data Structures:

|Single PCB |Multiple DS|
|-----------|-----------|
|Large continuos DS|Smaller DS|
|Private for each entity|Easier to share|
|Saved and restored on each context switch|Save and Restore only what needs to change on context switch|
|Update for any changes|User lever library need to only update portion of the state|

- Thus the following disadvantages for single PCB become advantages for Multiple DS : 
  * Scalability
  * Overheads
  * Performance
  * Flexibility
  
## Comparison of Interrupts and Signals

- Handled in specific ways
        - interrupt and signal handlers
    - Can be ignored
        - interrupt and signal mask
    - Expected or unexpected    
        - appear synchronously or asynchronously        

* Difference:

|Interrupts |Signals|
|-----------|-----------|
|Events generated externally by components other than CPU (I/O devices, timers, other CPUs)|Events triggered by CPU and software running on it|
|Determined based on physical platform|Determined based on OS|
|Appear asynchronously|Appear synchronously or asynchronously|

- Similarities:
	- Have a unique ID depending on h/w or OS
    - Can be masked and disabled/suspended via corresponding mask
    	- per-CPU interrupt mask, preprocess signal mask
	- if enabled, trigger corresponding to handler   
    	- interrupt handler set for entire system by OS
        - signal handler set on per process basis by process
        
> An interrupt is like a snowstorm alarm<br>
> A signal is like a low battery warning

### Interrupts

![interrupts](https://scdn.web.app/blog/os/interrupts.png)

### Signals

![signals](https://scdn.web.app/blog/os/signals.png)

#### Handlers / Actions
- Default actions
	- Terminate, ignore
    - Terminate and core dump
    - Stop or continue
- Process Installs Handler
	- signal(), sigaction()
    - for most signals, some cannot be "caught"
- **Synchronous**
	- SIGSEGV (access to protected memory)
    - SIGFPE (divided by zero)
    - SIGKILL (kill, id)
    	- can be directed to a specific thread
- **Asynchronous***        
	- SIGKILL (kill)
    - SIGALARM
### Why disable Interrupts or Signals

![disableis](https://scdn.web.app/blog/os/disableis.png)

Here PC: First instruction in handler<br>
SP : thread stack

To prevent deadlock,

1. Keep handler code simple
	- avoid mutex
    - **\-** too restrictive
2. Control interruptions by handler code
	- Use interrupt/signal masks
    - 0011100110.. (0: disabled, 1: enabled)
    
```
clear_field_in_mask(mask)
lock(mutex)
{

#disabled => remaining pending

}
unlock(mutex)
reset_field_in_mask(mask)

#enabled => execute handler code
```

- Interrupt masks are per CPU 
	- if mask disables interrupt, hardware interrupt rounting mechanism will not deliver interrupt
    
- Signal are per execution context (User-level thread on top of Kernel-level thread)
	- if mask disables signal, kernel sees mask and will not interrupt corresponding thread
    
### Types of Signals

1. One-shot Signals
	- "n signals pending == 1 signal pending" : atleast once 
    - must be explicitly re-enabled
2. Realtime Signals 
	- "if n signals raised, then handler is called n times"
    
### Handling interrupts as threads

![interruptsasthreads](https://scdn.web.app/blog/os/interruptsasthreads.png)

but dynamic thread creation is expensive!

- Dynamic decision
	- if handler doesn't lock
    	- execute on interrupted threads stack
	- if handler can block
    	- turn into real thread        
- Optimization        
    - pre-create and pre-initialize thread structure for interrupt routines
    
### Threads and Signal Handling

![tshandling](https://scdn.web.app/blog/os/tshandling.png)

**Case 1 :**

* User-Level-Thread mask = 1
* Kernel-Level-Thread mask = 1

![case1](https://scdn.web.app/blog/os/case1.png)

**Case 2 :**

* User-Level-Thread mask = 0
* Kernel-Level-Thread mask = 1
* another User-Level-Thread mask = 1

![case2](https://scdn.web.app/blog/os/case2.png)

**Case 3 :**

* User-Level-Thread mask = 0
* Kernel-Level-Thread mask = 1
* another User-Level-Thread mask = 1
* another Kernel-Level-Thread mask = 1

![case3](https://scdn.web.app/blog/os/case3.png)

**Case 4 :**

* User-Level-Thread mask = 0
* Kernel-Level-Thread mask = 1
* all User-Level-Thread mask = 0

![case4](https://scdn.web.app/blog/os/case4.png)

**Optimize common case**

- signals less frequennt than signal mask updates
- system calls avoided
	- cheaper to update user-level mask
-  signal handling more expensive    

## Multi-processing vs Multi-threading

How to best provide concurrency?

### Multi-Processing (MP)

**Advantages**<br> 

* Simple programming

**Disadvantages**<br> 

* High memory usage
* Costs context switch
* costly to maintain shared state (tricky port setup)

### Multi-Threading (MP)

**Advantages**<br> 

* Shared address space
* Shared state (no sys calls to other threads)
* Cheap context switch

**Disadvantages**<br> 

* Complex implementation
* Requires synchronization
* Requires underlying support for threads

## Event Driven model

![eventdrivenmodel](https://scdn.web.app/blog/os/eventdrivenmodel.png)

Features:

* Single address space
* Single process
* Single thread of control

Dispatcher : acts as a state machine and accepts any external events

When call handler => jump to code

The handler:

* Runs to completion
* if they need to block
	- initiate blocking operation and pass control to dispatch loop
    
### Concurrent execution in Event-driven models

- MP & MT :  1 request per execution context (process/thread)
- Event Driven : Many requests interleaved in an execution context
- Single thread switches among processing of different requests
- Process requests until wait is necessary
	- then switch to another request
    
**Advantages**<br>    

* Single address space
* Single flow of control
* Smaller memory requirement
	- Event Driven model requires less memory than Boss-workers/Pipeline model, where the extra memory is required for helper thread for concurrent blocking I/O not for all concurrent requests.
* No context switches
* No synchronization

**Disadvantages**<br>    

* A blocking request/handler will block entire process

### Asynchronous I/O operations

Asynchronous I/O operations fit well with Event-driven models	

Since asynchronous calls are not easily avalible, helpers can be used to implement the async call functionality:

- designated for blocking I/O operations only
- pipe/socket based communication with event dispatcher
	- select()/ poll() still okay
- helper blocks, but main event loop (& process) will not

### Asymmetric Multi-Process Event Driven model (AMPED & AMTED)

**Advantages**<br>

* Resolve portability limitations of basic event driven model
* Smaller footprint than regular worker thread

**Disadvantages**<br>

* Applicability to certain classes of applications
* Event routing on multi CPU systems

Eg [Apache Web Server](https://en.wikipedia.org/wiki/Apache_HTTP_Server)

![apachewebserver.png](https://scdn.web.app/blog/os/apachewebserver.png)

* Core : basic server skeleton
* Modules : per functionality
* Flow of Control : Similar to Event Driven model
* But its an combination of MP + MT,
	- each process = boss/worker with dynamic thread pool
    - number of processes can also be dynamically adjusted
    
<hr>    




# Scheduling

Operating System perform scheduling in the following simple ways:

- Dispatch orders immediately
	- scheduling is simple FIFO (First-Come-First-Serve)
- Dispatch simple orders first
	- maximize number of orders processed over time
    - maximize throughput (SJF)
- Dispatch complex orders first
	- maximize utilization of CPU, devices, memory
    
## CPU Scheduler

- Decides how and when process (and their threads) access shared CPUs
- Schedules tasks running at user level processes/threads as well as kernel level threads
- Chooses one of the ready tasks to run on CPU
- Runs when
	- CPU becomes idle
    - new task becomes ready
    - timeslice expired timeout

Context switch, enter user mode, set PC and go! <= Thread is dispatched on CPU.

* Which task should be selected?
	- Scheduling policy/algorithm
* How is this done?
	- Depends on runqueue data structure
    
### "Run-to-completion" Scheduling

- Initial assumptions
	- group of tasks/jobs
    - known execution time
    - no preemption
    - single CPU
- Metrics
	- throughput
    - average job completion time
	- average job wait time
	- CPU utilization
    
## Scheduling algorithms:

### 1. First Come First Serve (FCFS)

* Schedules tasks in order of arrival

```
runqueue = queue(FIFO)
``` 

If T1, T2, T3 arrive in the given order and T1 has execution time 1s, T2 10s and T3 1s then :

* Throughput = 3/(1+10+1) = 3/12 = 0.25s
* Average completion time = (1 + 11 + 12)/3 = 8s
* Average wait time = (1+1+11)/3 = 4s
* Starvation NOT possible

### 2. Shortest Job First (SJF)

* Schedules tasks in order of execution time
* Therefore for the above example, T1(1s) > T3(1s) > T2(10s)
* Starvation possible

```
runqueue = ordered(queue)

//or

runqueue = tree()
```

For SJF,

* Throughput = 3/(1+10+1) = 3/12 = 0.25s
* Average completion time = (1 + 2 + 12)/3 = 5s
* Average wait time = (0+1+2)/3 = 1s

### Preemptive Scheduling

* SJF + Preemption
* Starvation is possible

T2 arrives first.

![preemptive](https://scdn.web.app/blog/os/preemptive.png)

### Priority Scheduling

* Tasks have different priority levels
* Run highest priority task next (preemption)
* Starvation is possible

![priority](https://scdn.web.app/blog/os/priority.png)

```
runqueue = per priority_queue()

//or 

runqueue = tree() ordered on priority
```

* low priority task stuck in runqueue => starvation
* "priority aging" 
	- priority = f(actual priority, time spent in runqueue)
    - eventually tasks will run
    - prevents starvation
    
### 3. Round-Robin Scheduling

* Pick up the first task from queue (like FCFS)
* Task may yield to wait on I/O (unlike FCFCS)
* Starvation is NOT possible


![rr1](https://scdn.web.app/blog/os/rr1.png)

![rr2](https://scdn.web.app/blog/os/rr2.png)

![rr3](https://scdn.web.app/blog/os/rr3.png)

### 4. Shortest Remaining Time First (SRTF)

* Chooses the process with the shortest CPU burst remaining and executes that one. If processes come in during execution that have less remaining time, the current one is preempted and the new one executed. Therefore, it can lead to starvation.

#### Timeslicing

* Timeslice = max amount of uninterrupted time given to a task
* task may run less than timeslice
	- has to wait on I/O sync
    	- will be placed on queue
	- higher priority task becomes runnable
* using timeslice tasks are interleaved
	- timesharing the CPU
    - CPU bound tasks => preemption after timeslice
    
![rr4](https://scdn.web.app/blog/os/rr4.png)    

**Advantages**<br>

* Short tasks finish sooner
* More responsive
* Lengthy I/O operations initiated sooner
	- best to keep timeslice > context-switch-time
    
**Disdvantages**<br>    

* Overheads

#### How long should a timeslice be be?

* should balance benefits and overheads

### For CPU bound tasks: 

![cputs](https://scdn.web.app/blog/os/cputs.png)    

* Hence, for CPU bound tasks, larger timeslice values are better

### For I/O bound tasks: 

![iots](https://scdn.web.app/blog/os/iots.png)    

* Hence, for I/O bound tasks, smaller timeslice values are better
	- Keeps CPU and I/P devices busy, I/O bound tasks run quickly, makes I/O requests responds to a user.
    
### Summary

* CPU bound tasks prefer longer timeslices
	- limits context switching overheads
    - keeps CPU utilization and throughput
    
* I/O bound tasks prefer smaller timeslices 
	- However, if all the tasks in contention are I/O bound, it may not make such a difference
    - If a portion of them are I/O smaller timeslices keeps CPU and device utilization high
    - Provides better user-perceived performance

<hr>



# Memory Management

Operating systems:

- uses intelligently size containers
	- memory pages of segments
- Not all parts are needed at once 
	- tasks operate on subset of memory
- Optimized for performance
	- reduce time to access state in memory
    	- leads to better performance!
        
## Memory Management Goals

![mmgoals.png](https://scdn.web.app/blog/os/mmgoals.png)

#### Virtual vs Physical memory

- Allocate 
	- allocation, replacement
- Arbitrate
	- address translation and validation
    
#### Page-based Memory Management    

- Allocate => pages => page frames
- Arbitrate => page tables

#### Segment-based Memory Management    

- Allocate => segments
- Arbitrate => segment registers


## Hardware Support 

![hardwaresupport.png](https://scdn.web.app/blog/os/hardwaresupport.png)

### Memory Management Unit (MMU)  

* translate virtual to physical address 
* reports faults (illegal access, permission, not present in memory)

### Registers

* pointers to page tables
* base and limit size, number of segments

### Cache 

* Translation lookaside buffer
* Valid VA-PA translations using TLB

### Translation

* Actual PA generation done in hardware

## Page Tables

![pagetables.png](https://scdn.web.app/blog/os/pagetables.png)

- OS creates page table per process
- On context switch, switch to valid page table
- Updates register that points to correct page table.
	E.g CR3 on x86 architecture
    
## Page Table Entry (PTE)     

![pfn.png](https://scdn.web.app/blog/os/pfn.png)

#### Flags

* Present (valid/invalid)
* Dirty (written to)
* Accessed (for read or write)
* Protection bits => RWX

## Page Table Entry on x86   

![pfnx86.png](https://scdn.web.app/blog/os/pfnx86.png)

#### Flags

* Present 
* Dirty 
* Accessed
* R/W permission bit 0: R only, 1: R/W
* U/S permission bit 0: usermode, 1: superviser mode only
* others: caching related info (write through, caching disabled)
* unused: for future use

## Page faults

![pagefaults.png](https://scdn.web.app/blog/os/pagefaults.png)

## Page Table Size

![pts.png](https://scdn.web.app/blog/os/pts.png)

* 32 bit architecture
	- Page Table Entry (PTE) = 4 Bytes, including PFN + flags
	- Virtual Page Number (VPN) = 2^32/page_size
    - Page size = 4KB (...8KB, 2MB, 4MB, 1GB)
    
Therefore Page Table Size = (2^32 * 2^12)*4B = 4MB (per process)

* for 64 bit architecture
	- Page Table Entry (PTE) = 8 Bytes
    - Page size = 4KB
    
Page Table Size = (2^64 * 2^12)*8B = 32PB (per process!)

* processes don't use entire address space
* even on 32 bit architecture, it will not always use all 4GB

But Page Table assumes an entry per VPN regardless, of whether corresponding virtual memory is needed or not.

## Hierarchical Page Tables

![hierarchicalpt.png](https://scdn.web.app/blog/os/hierarchicalpt.png)

On malloc, a new internal page table may be allocated.

#### Address split:

<table>
  <tr>
    <th colspan="2">Page Number</th>
    <th>offset</th>
  </tr>
  <tr>
    <td>P1</td>
    <td>P2</td>
    <td>d</td>
  </tr>
  <tr>
    <td>12</td>
    <td>10</td>
    <td>10</td>
  </tr>
</table>

* inner table addresses => 2^10 * page_size = 2^10*2^10 = 1MB
* don't need an inner table for each 1MB virtual memory gap

Additional Layers

* page table directory pointer (3rd level)
* page table directory map (4th level)

- Important on 64 bit architectures
- larger and more sparse => larger gaps would save more internal page table components

![hierarchicalpt2.png](https://scdn.web.app/blog/os/hierarchicalpt2.png)

### Tradeoffs of Multilevel Page Tables

**Advantages**<br>

* Smaller internal page tables/directories 
* Granularity of coverage
	- Potentially reduced page table size

**Disadvantages**<br>

* More memory accesses required for translation
* increased translation latency

## Overheads of Address Translation

For each memory reference :

Single level page table|Four level page table
---------|-----------
x1 access to PTE|x4 accesses to PTE
x1 access to mem|x1 access to mem

which results in slowdown.

## Page Table Cache

![ptcache.png](https://scdn.web.app/blog/os/ptcache.png)

#### Translation Lookaside Buffer

- MMU level address translation cache
- On TLB miss => page table access from memory
- has protection/validity bits
- small number of cached address => high TLB hit rate
	- temporal and spatial locality

* Example
	- x86 Core i7
    	- per core : 64-entry data TLB <br> 128-entry instruction TLB 
        - 512-entry shared second-level TLB 

### Inverted Page Tables

![invertedpt.png](https://scdn.web.app/blog/os/invertedpt.png)

### Hashing Page Tables

![hashingpt.png](https://scdn.web.app/blog/os/hashingpt.png)

## Segmentation

Segmentation is the process of mapping virtual to physical memory using segments.

* Segments: arbitrary granularity (size)
	- e.g. code, heap, data, stack..
    - address = segment - selector + offset
* Segment
	- contiguous physical memory
    - segment size = segment base + limit registers

![segmentation.png](https://scdn.web.app/blog/os/segmentation.png)

#### Segmentation + Paging

![segmentationpaging.png](https://scdn.web.app/blog/os/segmentationpaging.png)

## Page Size

* 10 bit offset => 1 KB page size [2^10]
* 12 bit offset => 4 KB page size [2^12]

In real world examples,

* Linux/x86 : 4 KB, 2MB, 1GB
* Solaris/Sparse: 8kB, 4MB, 2GB

||Large|Huge|
|----|-----|
|page size|2 MB|1 GB|
|offset bits|21 bits|30 bits|
|reduction factor on page table size|x512|x1024|

**Advantages**<br>

* larger pages
	- fewer page table entries, smaller page tables, more TLB hits
    
**Disadvantages**<br>

* internal fragmentation => wastes memory

## Memory Allocation

* Memory allocator
	- determines VA to PA mapping
    - address translation, page tables
    	=> simply determine PA from VA and check validity/permsissions 
        
* Kernel Level Allocators
	- kernel state, static process state
* User Level Allocators
	- dynamic process state (heap), malloc/free
    - e.g. d/malloc, jemalloc, Hoard, tcmalloc
    
## Demand Paging

* Virtual Memory >> Physical Memory
	- virtual memory page is not always in physical memory
    - physical page frame saved and restored to/from secondary storage
    
### Demand paging:

- pages swapped in/out of memory & a swap partition (e.g. on a disk)
    
![demandpaging.png](https://scdn.web.app/blog/os/demandpaging.png)

* Original PA != PA after swapping
	- if page is "pinned", swapping is disabled
    
#### When pages should be swapped?

- page(out) daemon
- when memory usage is above threshold
- when CPU usage is below threshold

#### Which page should be swapped out?

- pages that won't be used
- history based prediction
	- Least Recently Used (LRU policy). Access bit tracks if page is referenced.
- page that don't need to be written out
	- Dirty bit to track if modified
- avoid non-swappable pages    
    
## Checkpointing

* Failure and Recovery management technique
	- periodically save process state
    - failure may be unavoidable but can restart from checkpoint, so recovery would be faster

#### Simple Approach

- pause and save
    
#### Better Approach

- write-protect and copy everything at once 
- copy diffs of dirties pages for incremental checkpoints
	- rebuild from multiple diffs, or in background

Checkpointing can also be used in other services:

* Debugging
	- Rewind-Replay
    - rewind = restart from checkpoint 
    - gradually go back to earlier checkpoints until error is found

* Migration
  - continue on another machine
  - disaster recovery
  - consolidation
  - repeated checkpoints in a fast loop until pause and copy becomes acceptable (or unavoidable)

<hr>


# Inter Process Communication

- Processes share memory
	- data in shared messages
- Processes exchange messages
	- message passing via sockets
- Requires synchronization
	- mutex, waiting
    
**Inter Process Communication**(IPC) is an OS supported mechanism for interaction among processes (coordination and communication)   

- Message Passing
	- e.g. sockets, pips, msgs, queues
- Memory based IPC 
	- shared memory, memory mapped files
- Higher level semantics
	- files, [RPC](10-Remote-Procedure-Calls.md)
- Synchronization primitives

## Message Passing

* Send/Receive messages 
* OS creates and maintains a channel
	- buffer, FIFO queue
* OS provides interfaces to processes
	- a port
    - processes send/write messages to this port
    - processes receive/read messages from this port

![messagepassingipc.png](https://scdn.web.app/blog/os/messagepassingipc.png)

* Kernel required to 
	- establish communication
    - perform each IPC operation
    - send: system call + data copy
    - receive: system call + data copy
* Request-response:
	4x user/ kernel crossings + <br>
    4x data copies
    
**Advantages**<br> 

* simplicity : kernel does channel management and synchronization

**Disadvantages**<br> 

* Overheads 

### Forms of Message Passing IPC

#### 1. Pipes 

- Carry byte stream between 2 process
- e.g connect output from 1 process to input of another
    
![pipes.png](https://scdn.web.app/blog/os/pipes.png)    

#### 2. Message queues

- Carry "messages" among processes
- OS management includes priorities, scheduling of message delivery 
- APIs : Sys-V and POSIX
    
![msgq.png](https://scdn.web.app/blog/os/msgq.png)        

#### 3. Sockets

- send() and recv() : pass message buffers
- socket() : create kernel level socket buffer
- associated neccessary kernel processing (TCP-IP,..)
- If different machines, channel between processes and network devices
- If same machine, bypass full protocol stack
    
![sockets.png](https://scdn.web.app/blog/os/sockets.png)        

## Shared Memory IPC

* read and write to shared memory region
* OS establishes shared channel between the processes
	1. physical pages mapped into virtual address space
    2. VA(P1) and VA(P2) map to same physical address
    3. VA(P1) != VA(P2)
    4. physical mempry doesn't need to be contiguous
* APIs : SysV, POSIX, memory mapped files, Android ashmem   

![sharedmemoryipc.png](https://scdn.web.app/blog/os/sharedmemoryipc.png)

**Advantages**<br>

* System calls only for setup data copies potentially reduced (but not eliminated)

**Disdvantages**<br>

* explicit synchronization
* communication protocol, shared buffer management
    - programmer's responsibility
    
## Which is better?

**Overheads for**
1. Message Passing : must perform multiple copies
2. Shared Memory : must establish all mappings among processes' address space and shared memory pages

Thus, it depends.

## Copy vs Map

Goal for both is to transfer data from one into target saddress space

Copy (Message Passing) | Map (Shared Memory)
----------------|-----------------
CPU cycles to copy data to/from port | CPU cycles to map memory into address space
|CPU to copy data to channel
|If channel setup once, use many times (good payoff)
|Can perform well for 1 time use

* Large Data: t(Copy) >> t(Map)
	- e.g. tradeoff exercised in Window "Local" Procedure Calls (LPC)
    
## Shared Memory and Synchronization

Use threads accessing shared state in a single addressing space, but for process

Synchronization method:

1. mechanism supported by processing threading library (pthreads)
2. OS supported IPC for sync

Either method must coordinate

* no of concurrent access to shared segment
* when data is available and ready for consumption

### IPC Synchronization

Message Queues| Semaphores
-------------|-------------
Implement "mutual exclusion" via send/receive | OS supported synchronization construct
|binary construct (either allow process or not)
|Like mutex, if value = 0, stop; if value = 1, decrement(lock) and proceed

<hr>


# Synchronization

Waiting for other processes, so that they can continue working together

- may repeatedly check to continue
	- sync using spinlocks
- may wait for a signal to continue
	- sync using mutexes and condition vatiables
- waiting hurts performance
	- CPUs wste cycles for checking; cache effects
    
## Limitation of mutextes and condition variables

- Error prone/correctness/ease of use
	- unlock wrong mutex, signal wrong condition variable
- Lack of expressive power
	- helper variables for access or priority control
    
Low-level support: hardware atmoic instructions

## Synchronization constructs

1. Spinlocks (basic sync construct)
	- Spinlock is like a mutex 
    	- mutual exclusion
        - lock and unlock(free)
   	- but, lock == busy => spinning
2. Semaphores
	- common sync construct in OS kernels
    - like a traffic light: Stop and Go
    - like mutex, but more general
    
Semaphore == integer value

* on init
	- assigned a max value (positive int) => max count
* on try(wait)
	- if non-zero, decrement and proceed => counting semaphore
* if initialized with 1
	- semaphore == mutex(binary semaphore)
* on exit(post)
	- increment
    
## Syncing different types of accesses

### Reader/Writer locks

<table>
<tr>
<td>read (don't modify)</td>
<td>write (always modify)</td>
</tr>
<tr>
<td>shared access</td>
<td>exclusive access</td>
</tr>
</table>

* RW locks
	- specify type of access, then lock behaves accordingly
    
### Monitors (highlevel construct)
- shared resource
- entry resource
- possible condition variables
* On entry:
	- lock, check
* On exit:
	- unlock, check, signal
    
### More synchroniaztion constructs    
* serializers
* path expressions
* barriers
* rendezvous points
* optimistic wait-free sync (RCU) [Read Copy Update]

All need hardware support.

## Need for hardware support

- Problem 
	- concurrent check/update on different CPUs can overlap
    
### Atomic instructions
 Critical section with hardware supported synchronization
 
#### Hardware specific
* test-and-set
	- returns(tests) original values and sets new-value!= 1 (busy) automatically
    - first thread: test-and-set(lock) => 0 : free
    - next ones: test-and-set(lock) => 1 busy
    	- reset lock to 1, but that's okay
     - **\+** : Latency 
     - **\+** : minimal (Atomic)
     - **\+** : Delay potentially min
     - **\-** : Contention processors go to memory on each spin 
			- To reduce contention, introduce delay
        	  - Static(based on a fixed value) or Dynamic(backoff based, random delay)
     
        
* read-and-increment
* compare-and-swap

#### Guarantees
* atomicity
* mutual exclusion
* queue all concurrent instructions but one
    

### Shared Memory Multiprocessors

Also called symmetric multiprocessors (SMP)

![sharedmmmp](https://scdn.web.app/blog/os/sharedmmmp.png)

* Caches 
	- hide memory latency, "memory" further away due to contention
	- no-write, write-through, write-back   

### Cache Coherence

![cachecoherence](https://scdn.web.app/blog/os/cachecoherence.png)

![cachecoherence2](https://scdn.web.app/blog/os/cachecoherence2.png)

<hr>

    
    
    
    
    # I/O Management

Operating system

- Has protocols 
	- Interfaces for device I/O
- Has dedicated handlers
	- Device drivers, interrupt handlers
- Decouple I/O details from core processing
	- abstract I/O device detail from applications
    
## I/O Device Features

- Control registers (accessed by CPU)
	- Command
    - Data Transfers
    - Status
- Microcontroller : device's CPU
- On device memory
- Other logic
	- e.g. analog to digital
    
## Device drivers

- per each device type
- responsible for device access management and control
- provided by device manufacturers per OS /version
- each OS standardizes interfaces
	- device independence
    - device diversity

## Types of devices

- Block
	- e.g. disk
    - read/write blocks of data
    - direct access to arbitrary block
- Character
	- e.g. keyboard
    - get/put character
- Network devices

OS representation of a device : special device file

UNIX like systems:

* /dev
* tmpfs
* devfs

Linux supports a number of pseudo "virtual" devices that provide special functionality to a system.

## CPU device interactions

![iointeractions.png](https://scdn.web.app/blog/os/iointeractions.png)

access device registers : memory load/store

1. Memory mapped I/0
	- part of 'host' physical memory dedicated for device interactions
    - Base Address Registers (BAR)
2. I/O Port
	- dedicated in low instructions for device access
    - target device (I/0 port) and value in register
    
## Path from Device to CPU

1. Interrupt
	- Overhead: Interrupt handling steps
    - \+: Can be generated as soon as possible
2. Polling
	- Overhead: Delay or CPU overhead
    - when convenient for OS
    
## Device access : Programmed I/O (PIO)    

- No additional hardware support
- CPU "programs" the device
	- via command registers
    - data movement
- E.g. NIC(Network Interface Card)
	- data = network packet
- Write command to request packet information
- Copy packet to data registers
- Repeat until packet sent

E.g. 1500B packet; 8 byte registers or bus => 1(for bus command) + 188(for data) = 189 CPU store instructions

## Direct Memory Access (DMA)

- Relies on DMA controller
- CPU "programs" the device
	- via command registers
    - via DMA controls
- E.g. NIC (data = network packet)
- Write command to request packet information
- Configure DMA controller with in memory address and size of packet buffer

E.g. 1500B packet; 8 byte registers or bus => 1(for bus command) + 1(for DMA configuration) = total 2 CPU store instructions. Less steps, but DMA configuration is more complex.

For DMAs
- data buffer must be in physical memory until transfer completes
- pinning regions (non-swappable)

## Typical Device Access

![typicaldeviceaccess.png](https://scdn.web.app/blog/os/typicaldeviceaccess.png)

- System call
- In-kernel stack
- Driver Invocation
- Device request configuration
- Device performs request

### OS bypass

![osbypass.png](https://scdn.web.app/blog/os/osbypass.png)

- device registers/data
	- directly available
- OS configures
	- then gets out of the way
- "user level driver"
	- in library
- OS retains coarse-grain control
- relies on device features
	- sufficient registers
    - demux capability

## What happens to a calling thread?

![access.png](https://scdn.web.app/blog/os/access.png)

* Synchronous I/O operations
	- process blocks
* Asynchronous I/O operations
	- process continues
    - Later, process checks and retrieves result
    - OR
    - process is notified that operation is completed and results are ready
    
## Block Device Stack

Block device typical storage for files:

![blockdevicestack.png](https://scdn.web.app/blog/os/blockdevicestack.png)

- processes use files => logical storage unit
- kernel file system (KFS)
	- where how to find and access file
    - OS specifies interface
- generic block layer
	- OS standardized block interface
- Device driver    

## Virtual File System

![vfs.png](https://scdn.web.app/blog/os/vfs.png)

### Virtual File System Abstractions

* File : Elements on which the VFS operates
* File Descriptor : OS representation of file
	- open, read, write, send file , lock, close
* inode : Persistent representation of file "index"
	- list of all data blocks
    - device, permissions, size
* dentry : Directory entry, corresponding to the single path component, 
	- dentry cache
* super block : file system specific information regarding the File System layout

### VFS on disk

* File : data blocks on disk
* inode : track file blocks
	- also resides on disk in some block
* super block : overall map of disk blocks
	- inode blocks
    - data blocks
    - free blocks

### Inodes

Index of all disk blocks corresponding to a file

* File : identified by inode
* inode : list of all blocks + other metadata

**\+**: Easy to perform sequential or random access<br>
**\-**: Limit on file size

### Inodes with indirect pointers

* Index of all disk blocks corresponding to a file
* Index contain:
	- metadata
    - pointers to blocks
* Direct pointer : Points to data block
	- 1 KB per entry
* Indirect pointer : Points to block of pointers
	- 256 KB per entry    
* Double Indirect pointer : Points to block of block of pointers
	- 64 MB per entry    
    
**\+**: Small inode => large file size<br>
**\-**: File access slowdown

## Disk access optimizations 

Reducing file access overheads

1. Caching/buffering : reducenumber of disk accesses
	- buffer cache in main menu
    - read/write from cache
    - periodically flush to disk - fsync()
2. I/O scheduling : reduce disk head movement
	- maximize sequential vs random access
3. Prefetching : increases cache hits
	- leverages locality
4. Journaling/logging: reduce random access (ext3, ext4)
	- "describe" write in log : block, offset, value..
    - periodically apply updates to proper disk locations
    
<hr>    
 
    
    # Virtualization

Virtualization allows concurrent execution of multiple OSs and their applications on the same physical machine.

![virtualization.png](https://scdn.web.app/blog/os/virtualization.png)

* Virtual resources : each OS thinks that ot "owns" hardware resources
* Virtual machine (VM) : OS + applications + virtual resources (guest domain)
* Virtualization layer : management of physical hardware (virtual machine monitor, hypervisor)

## Defining Virtual Machine

A Virtual Machine is an efficient, isolated duplicate of the real machine.

* Supported by a Virtual Machine Monitor (VMM):
	1. provides environment essentially identical with the original machine
    2. programs show only minor decrease in speed at worst
    3. VMM is in complete control of the system resources
    
## VMM goals  

* Fidelity
* Performance
* Safety and Isolation

## Virtualization advantages

* consolidation
	- decrease cost, improve manageability
* migration
	- availibility, reliability
* security, debugging, support for legacy OS

## Two main Virtualization Models:

### 1. Bare-metal or Hypervisor based (Type 1)

![hypervisor.png](https://scdn.web.app/blog/os/hypervisor.png)

* VMM (hypervisor) manages all hardware resources abd supports execution of VMs
* privileged, secure VM to deal with devices (and other configuration and management tasks)
* Adopted by Xen(Opensource or Citriol Xen Server) and ESX (VMware)

### 1. Hosted (Type 2)

![hosted.png](https://scdn.web.app/blog/os/hosted.png)

* Host owns all hardware
* Special VMM modle provides hardware interfaces to VMs and deals with VM context switching

## Virtualization requirements

* Present virtual platform interface to VMs
	- virtualize CPU, memory, devices
* Provide isolation across VMs
	- preemption, MMU for address translation and validation
* Protect guest OS from applications
	- can't run guest OS and applications at same protection level
* Protect VMs from guest OS
	- can't run guest OS and VMMs at same protection level

## Hardware protection levels

Commodity hardware has more than two protection levels

![hwprotectionlevels](https://scdn.web.app/blog/os/hwprotectionlevels.png)

* x86 has 4 protection levels (rings)
	- ring 3 : lowest privilege (applications)
    - ring 1 : OS
    - ring 0 : highest privilege (hypervisor)
* and 2 protection modes
	- non root : VMs 
    	- ring 3 : apps
        - ring 0 : OS
	- root : 
    	- ring 0 : hypervisor

## Process Virtualization (Trap-and-Emulate)

- Guest instruments
	- executed directly by hardware
    - for non-privileged operations : hardware speeds => efficiency
    - for privileged operations : trap to hypervisor
- Hypervisor determines what needs to be done:
	- if illegal operation : terminate VM
    - if legal operation : emulate the behaviour the guest OS was expecting from the hardware
    
## Problems with Trap-and-Emulate

- 17 privileged information do not trao but fail silently
- Hypervisor doesn't know, so it doesn't try to change settings
- OS doesn't know, so assumes change was successful

## Binary Translation

**Goal** : Full Virtualization i.e. guest OS is not modified

**Approach** : Dynamic Binary Translation

1. Inspect code blocks to be executed
2. If needed, translate to alternate instruction sequence
	- e.g. to emulate desired behaviour, possibly avoid traps
3. Otherwise run at hardware speeds
	- cache translated blocks to ammortize translation costs

## Paravirtualization

**Goal** : Performance; give up on modified guest OSs

**Approach** : Paravirtualization : modify guest OSs so that 

- it knows it is running virtualized
- it makes explicit calls to hyperisor (hypercalls)
- hypercalls (~ system calls)
	- package context information
    - specify desired hypercall
    - trap to VMM
- Xen : opensource hypervisor

## Memory virtualization

* Full virtualization
	- all guests expect contiguous physical memory starting at 0
    - virtual vs physical vs machine addresses and page frame numbers
	- still leverages hardware (MMU, TLB..)    
* Option 1
	- guest page table : VA => PA
    - hypervisor : PA => MA
    - too expensive!
* Option 2
	- guest page tables : VA => PA
    - hypervisor shadow PT : VA => MA
    - hypervisor maintains consistence
    	- e.g. invalidate on context switch, write protect guest PT to track new mappings
* Paravirtualized 
	- guest aware of virtualization
    - no longer strict requirement on contiguous physical memory starting at 0
    - explicitly registers page tables with hypervisor
    - can "batch" page tables updates to reduce VM exits
    - other optimazations
    
Overheads eliminated or reduced on newer platforms

## Device Virtualization

* For CPUs and Memory
	- less diversity, Intruction-Set-Architecture(ISA) level
    - Standardization of interface
* For Devices
	- high diversity
    - lack of standard specification of device interface and behaviour

#### 3 key models for Device Virtualization:

### 1. Pass through model

Approach: VMM-level-driver configures device access permissions

![passthrough.png](https://scdn.web.app/blog/os/passthrough.png)

**Advantages**<br>

* VM provided with exclusive and direct (VMM bypass) access to the device

**Disadvantages**<br>

* Device sharing difficult
* VMM must have exact type of device as what VM expects
* VM migration tricky
    
### 2. Hypervisor - Direct model

Approach: 

- VMM interrupts all device accesses
- Emulate device operations
	- translate to generic I/O operations
    - traverse VMM-resident I/O stack
    - invoke VMM-resident driver
    
![hypervisordirect.png](https://scdn.web.app/blog/os/hypervisordirect.png)    

**Advantages**<br>

* VM decoupled from physical device
* Sharing, migration, dealing with device specifics

**Disadvantages**<br>

* Latency of device operations
* Device driver ecosystem complexities in Hypervisor

### 3. Split Device-Driver model

Approach: 

- Device access control split between
- Emulate device operations
	- front-end driver in guest VM (device API)
    - back-end driver in service VM (or Host)
    - modified guest drivers
    	- i.e. limited to paravirtualized guests

![splitdevicedriver.png](https://scdn.web.app/blog/os/splitdevicedriver.png)          

**Advantages**<br>

* Eliminate emulation overhead
* Allow for better management of shared devices

<hr>



# Remote Procedure Calls

Example : GetFile App

- Client Server
- Create and init sockets
- Allocate and populate buffers
- Include 'protocol' info
	- GetFile, size
- Copy data into buffers
	- filename, file
* common steps related to remote IPC 

#### Remote Procedure Calls (RPC)

* Intended to simplify the development of cross address space and cross machine interactions

**\+** Higher-level interface for data movement and communication<br>
**\+** Error handling<br>
**\+** Hiding complexities of cross machine interactions

## RPC requirements

![rpcrequirements](https://scdn.web.app/blog/os/rpcrequirements.png)

1. Client/Server interactions
2. Procedure Call Interface => RPC
	- sync call semantics
3. Type checking 
	- error handling 
    - packet bytes interpretation
4. Cross machine conversion
	- e.g. big/little endian
5. Higher level protocol
	- access control, fault tolerance, different transport protocols
    
## Structure of RPC

![rpcstructure](https://scdn.web.app/blog/os/rpcstructure.png)

## RPC Steps:

(-1.) register : server registers procedure, arg types, location<br>
(0.) bind : client finds and binds to desired server

1. call : client make RPC call; control passed to stub, client code blocks
2. marshal : client stub "marshals" args (serialize args into buffer)
3. send : client sends message to server
4. receive : server receives message; passes message to server stub; access control
5. unmarshal : server stub "unmarshals" args (extract args from buffer)
6. actual call : server stub calls local procedure implementation
7. result : server performs operation and computes result of RPC operation

(same on return <=)

## Interface definition Language (IDL)

* Used to describe the interface the server expects
	- procedure name, args, 2 result types
    - version number

RPC can use IDL that is 

1. Language agnostic
	- XDR in SunRPC
2. Language specific
	- Java in JavaRMI
    
## Marshalling

![Marshalling](https://scdn.web.app/blog/os/marshalling.png)

## Unmarshalling

![Unmarshalling](https://scdn.web.app/blog/os/unmarshalling.png)

Marshalling/Unmarshalling routines are provided by RPC system compiler.

## Binding and Registry

* Client determines
	- **which** server to connect to?
    	- service name. version number
	- **how** to connect to that server?
    	- IP address, network protocol
* Registry : database of available services
	- search for service name to find server(which) and contact details(how)
    - distributed 
    	- any RPC service can register
    - machine-specific
    	- for services running on same machine
        - clients must know machine addresses
        - registry provides port number needed for connection
* Who can provide a service?
	- lookup registry for image processing
* What services do they provide?
	- compress/filter.. version number => IDL
* How will they ship package?     
	- TCP / UDP -> registry
    
## Pointers

* Procedure interface : foo(int,int)
* in Local Calls : foo(x,y) => okay
* in Remote Calls : foo(x,y) => ?

here, y points to location in caller address space 

* Solutions:
	- No pointers
    - Serialize pointers; copy referenced ("points to") data structure to send buffer
    
## Handling Partial Failures 

- Special RPC error notification (signal, exception..)
	- Catch all possible ways in which RPC can (partially) fail
    
## RPC Design choice

* Binding => How to find the server
* IDL => How to talk to server; how to package data
* Pointers as args => Disallow or serialize pointer data
* Partial failures => Special error notifications

<hr>



# Distributed File Systems

- Accessed via well defined interface
	- access via Virtual File Systems
- Focus on consistent state
	- tracking state, file update, cache coherence
- Mixed distribution models possible 
	- replicates vs partitioned, peer-like systems
    
## DFS models

- Client Server on different machines
- File server distributed on multiple machines 
	- replicated (each server : all files)
    - partitioned (each server : parts of files)
    - both (files partitioned, each partition replicates)
- Files stored on and served from all machines (peers)
	- blurred distinction between clients and servers
    
## Remote File Service : Extremes

![extremes](https://scdn.web.app/blog/os/extremes.png)

![extremes2](https://scdn.web.app/blog/os/extremes2.png)

1. Extreme1 : Upload/Download
	- like FTP, SVN 
    - **\+** local read/writes at client
    - **\-** entire file download/upload evn for small accesses
    - **\-** server gives up contro;
2. Extreme2 : True Remote File Access
	- Every access to remote file, nothing done locally
    - **\+** file access centralized, easy to reason about consistency
    - **\-** every file operation pays network cost, limits server scalablity
    
## Remote File Service : A compromise

A more practical Remote File access (with Caching)

1. Allow clients to store parts of files locally (blocks)
	- **\+** low latency on file operations
    - **\+** server load reduces => more scalable
2. Force clients to interact with server (frequently)   
	- **\+** server has insights into what clients are doing
    - **\+** server has control into which accesses can be permitted => easier to maintain consistency
    - **\-** server more complex, requires different file sharing semantics
    
## Stateless vs Stateful File server    

Stateless | Stateful
----------|----------
Keeps no state; Okay with extreme models, but can't support 'practical' model|Keeps client state needed for 'practical' model to track what is cached/accessed
**\-** Can't support caching and consistency management|**\+** Can support locking, caching, incremental operations
**\-** Every request self-contained. => more bits transferred|**\-** Overheads to maintain state and consistency. Depends on caching mechanism and consistency protocol.
**\+** No resources are used on server side (CPU, MM). On failure just restart|**\-** On failure, need checkpoining and recovery mechanisms

## Caching state in a DFS

* Locally clients maintain portion of state (e.g. file blocks)
* Locally clients perform operations on cached state (e.g. open/read/write)
* requires coherent mechanisms

![cachingstate.png](https://scdn.web.app/blog/os/cachingstate.png)

|System|How|When|
|---|----|----|
|SMP|Write-update/Write-invalidate|On write|
|DFS|Client/Server-driven|On demand, periodically, on open..| 

* Files or File blocks can be (with 1 server and multiple clients) cached in:
	- in client memory
    - on client  storage device (HDD/SDD)
    - in buffer cache in memory on server
    	- (usefulness will depend on client load, request interleaving)
        
* File Sharing Semantics in DFS

* Session semantics (between open-close => Session)
	- write-back on close(), update on open()
    - easy to reason, but may be insufficient
* Periodic updates
	- client writes-back periodically
    	- clients have a "lease" on cached data (not exclusively necessary)
	- servers invalidates periodically => provides biunds on "inconsistency"
    - augment with flush()/sync() API
* Immutable files => never modify, new files created
* Transactions => all changes atomic

# Replication vs Partitioning

<table>
<tr>
<th></th>
<th>Replication</th>
<th>Partitioning</th>
</tr>
<tr>
<td></td>
<td>Each machine holds all files</td>
<td>Each machine has subset of files</td>
</tr>
<tr>
<td>Advantages</td>
<td>Load balancing, availibility, fault tolerance </td>
<td>Availibility vs single server DFS;<br>Scalability with file system size;<br>single file writes simpler</td>
</tr>
<tr>
<td>Disadvantages</td>
<td>Write becomes more complex<br>- Synchronous to all<br>- or, write to one, then propagate to others<br>replicas must be reconciled e.g. Voting</td>
<td>On failure, lose portion of data<br>load balancing harder, if not balanced, then hot-spots possible</td>
</tr>
</table>

* Can combine both techniques
	- Replicate each partition!
    
<hr>



# Distributed Shared Memory 

- Must decide placement
	- place memory (pages) close to relevant processes
- Must decide migration
	- when to copy memory (pages) from remote to local
- Must decide sharing rules
	- ensure memory generations are properly ordered
    
## "Peer" Distribution Applications

* Each node 
	- "owns" state
    - provide service
- all nodes are "peers".

Examples: Big-data analytics, web searches, context sharing or distributed shared memory (DSM)

## Distributed Shared Memory (DSM)

DSM is a service that manages memory accross multiple nodes so that applications that are running on top will have an illusion that they are running on a shared memory.

* Each node 
	- "owns" state => memory
    - provide service
    	- memory read/writes from any nodes
        - consistency protocols
	- permits scaling beyond single machine memory limits
    	- more "shared" memory at lower cost 
        - slower overall memory access
        - commodity interconnect technologies support this RDMA(Remote Direct Memory Access)

## Hardware vs Software DSM

* Hardware-supported (expensive!)
	- relies on interconnect
    - OS manages larger physical memory 
    - NIC(Network Interface Cards) translate remote memory accesses to messages
    - NICs involved in all aspects of memory management; support atomics..
* Software supported
	- everything done by software
    - OS,or language runtime
*  Hybrid (Software tasks in Hardware) DSM implementations
    - prefetch pages
    - address translation (easier done in hardware)
    - triggering invalidations (easier done in hardware)

## DSM Design : Sharing Granularity

* cache line granularity?
	- overheads too high for DSM
- variable granularity [N]
- page granularity [Y] (OS level)
- object granularity [Y] (Language runtime)
	- beware of false sharing E.g. x and y shared on same page
    
## What types of applications use DSM?

Application access algorithm
- Single reader/ single writer (SRSW)
- Multiple readers/ single writer (MRSW)
- Multiple reader/ Multiple writers (MRMW)

## Performance considerations

* DSM performance metric == access latency
* Achieving low latency through 
	- Migration
    	- makes sense for SRSW
        - requires data movement
	- Replication (caching)        
    	- more general 
        - requires consistency management
* Hence, migration is okay for SRSW but not for all. 
* Caching and Replication        
	- Copies of data to incerease data access
    - for many concurrent writes, overheads too high but stil generally better than Migration
    
## Consistency Management

* In SMP
	- write invalidate
    - write update 
* coherence operations triggered in each write 
	- overhead too high
* Push invalidations when data is written to 
	1. Proactive
    2. Eager
    3. Pessimistic
* Pull modifications information periodically
	1. on demand (reactive)
    2. lazy
	3. optimistic
* when these methods get triggered depends on the consistency model for the shared state

## DSM architecture (page-based, OS-supported)

* Page-based DSM architecture
	- distributed nodes, each with own local memory contribution
    - pool of pages from all nodes
    - each page has IO ("home" node), page frame number
* if MRMW 
	- need local caches for performances (latency)
    - "home" or "manager" node drives coherence operations
    - all nodes responsible for part if distributed memory (state) management
* Home node    
    - keeps state: page accessed, modifications, caching enabled/disabled, locked..
* Current owner
	- owner may not be equal to home node
* Explicit replicas 
	- for load balancing, performance, or reliability
    	home, manager node controls memory
        

## DSM metadata

![metadata.png](https://scdn.web.app/blog/os/metadata.png)

## Implementing DSMs

* Problem : DSM must intercept access to DSM state 
	- to send remote messages requesting access
    - to trigger coherence messages
- overheads should be avoided for local non-shared state (pages)
- dynamically engage and disengage DSM when necessary
* Solution : Use hardware MMU support!
	- trap in OS if mapping invalid or access denied
	- remote address mapping -> trap and pass to DSM to send message
	- cached content -> trap and pass to DSM to perform memory coherence operations
	- other MMU information useful (e.g. Dirty page)  
    
## Consistency model

- Agreement between memory (state) and upper software layers
- Memory behaves correctly if and only if software follows specific rules
- Memory (state) guarantees to behave correctly
	- access ordering
    - propagation/ visibility of updates
    
### Our notation    
   
![notation.png](https://scdn.web.app/blog/os/notation.png)

* R_m1(X) => X was read from memory location m1
* W_m1(Y) => Y was written to memory location m1

### Strict Consistency

Strict Consistency => updates visible everywhere immediately

![strict.png](https://scdn.web.app/blog/os/strict.png)

- In practice
	- Even on single SMP no guarantees on order without extra locking and synchronization
    - in DS, latency and message reorder make this even harder
    - Hence almost impossible to guarantee strict consistency

### Sequential Consistency

![seq.png](https://scdn.web.app/blog/os/seq.png)

Sequential consistency =>

* memory updates from different  processors may be arbitrarily interleaved
* All processes will see the same interleaving
* Operations from the same process always appearin order they were issued

### Causal Consistency

![causal.png](https://scdn.web.app/blog/os/causal.png)

* For writes not causally related, "concurrent" writes doesnt gurantee.
* Don't permit arbitrary ordering from same process writer

### Weak Consistency

![weak.png](https://scdn.web.app/blog/os/weak.png)

* Use of synchronization
	- Synchronization point => operations that are available (R,W,Sync)
    - all updates prior to a sync point will be visible
    - no guarantee what happens in between
    
**\+** limit data movement of coherence operations

**\-** maintain extra state for additional operations

* Variations:
	- Single sync operation (sync)
    - Seperate sync per surface of state (page)
    - Seperate "entry/acquire" vs "exit/release" operations
<hr>

