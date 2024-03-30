import cv2

# تحميل ملف XML المدرب لتتبع العين
eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')

# تفعيل الكاميرا
cap = cv2.VideoCapture(0)

while True:
    # قراءة الإطار من الكاميرا
    ret, frame = cap.read()
    if not ret:
        break

    # تحويل الإطار إلى اللون الرمادي
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # تتبع العين
    eyes = eye_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    # رسم مربع حول العين
    for (x, y, w, h) in eyes:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)

    # عرض الإطار
    cv2.imshow('Eye Tracker', frame)

    # انتظار لضغط مفتاح للخروج (اضغط على مفتاح 'q')
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# إيقاف تشغيل الكاميرا وإغلاق نوافذ OpenCV
cap.release()
cv2.destroyAllWindows()
